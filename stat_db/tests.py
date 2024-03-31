from django.test import TestCase
from django.test import Client
from django.db import models as db_models
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from StringIO import StringIO
#from requests import Request, Session
from stat_db import urls
from stat_db import views
from stat_db import models
from stat_db import serializers


def get_default_model(model, save=False):
    instance = model()
    for field in model._meta.fields:
        if isinstance(field, db_models.ForeignKey):
            field_instance = get_default_model(field.rel.to, save=True)
            setattr(instance, field.name, field_instance)
    # Must save a model before setting any m2m fields
    if model._meta._many_to_many():
        instance.save()
    for field in model._meta._many_to_many():
        many_set = field.rel.to.objects.all()
        if len(many_set) == 0:
            field_instance = get_default_model(field.rel.to, save=True)
            setattr(instance, field.name, [field_instance, ])
        else:
            setattr(instance, field.name, many_set)
    if save:
        instance.save()
    return instance


class ViewSetTest(TestCase):
    """
    Test GET, POST, PUT, PATCH, DELETE, OPTIONS
    methods in base viewset

    """
    header = {'Content-Type': 'application/json',
        'Accept': 'application/json'}

    def test_viewset_get(self):
        """
        Tests that running GET on all viewsets yields ok response
        """

        csrf_client = Client(enforce_csrf_checks=True)
        # Run GET on all viewsets
        #for viewset in get_viewsets():
        for viewset in views.get_all_viewsets():
            db_url = urls.get_url_from_viewset(viewset)
            print('testing GET at: %s' % db_url)
            response = csrf_client.get(db_url, **self.header)
            print('response code: %d' % response.status_code)
            self.assertEqual(response.status_code, 200)

    def test_viewset_put_delete(self):
        """
        Tests that running PUT on all viewsets yields ok response
        """

        csrf_client = Client(enforce_csrf_checks=True)
        # Run POST on all viewsets
        for viewset in views.get_all_viewsets():
            db_url = urls.get_url_from_viewset(viewset) + '/1'
            print('testing: %s' % db_url)
            #Create dummy instance of the model
            test_object = get_default_model(viewset.model)
            # Serialize into a json string
            serializer = viewset.serializer_class(test_object)
            json = JSONRenderer().render(serializer.data)
            print('data string to put:\n%s' % json)
            # Call PUT on API
            response = csrf_client.put(db_url, data=json,
                    content_type='application/json', **self.header)
            print('response: %s' % response.content)
            print('response code: %d' % response.status_code)
            self.assertTrue(response.status_code == 201 or
                    response.status_code == 200)
            response = csrf_client.delete(db_url, data=json,
                    content_type='application/json', **self.header)
            print('response: %s' % response.content)
            print('response code: %d' % response.status_code)
            self.assertTrue(response.status_code == 202 or
                    response.status_code == 204)


class AugmentedSerializerTest(TestCase):
    """
    Test serializing augmented Event and EventParticipant

    """

    def test_serialize_flat(self):
        address = models.Address()
        address_serializer = serializers.get_serializer(address.__class__)(address)
        address_json = JSONRenderer().render(address_serializer.data)
        print('address json:\n%s' % address_json)
        default_address = '{"id": null, "is_primary": false, ' + \
                '"address1": "100 Test St.", "address2": null, ' + \
                '"city": "Testville", "state": "TS", ' +\
                '"zip_code": ""}'
        self.assertEqual(address_json, default_address)

        contact = models.Contact()
        contact_serializer = serializers.get_serializer(contact.__class__)(contact)
        contact_json = JSONRenderer().render(contact_serializer.data)
        print('contact json:\n%s' % contact_json)
        default_contact = '{"id": null, "name": "John Doe", ' + \
                '"title": ""}'
        self.assertTrue(contact_json, default_contact)

    def test_serialize_one_nesting(self):
        ep = get_default_model(models.EventParticipant)
        serializer = serializers.get_serializer(ep.__class__)
        ep_ser = serializer(ep)
        json = JSONRenderer().render(ep_ser.data)
        default_ep = '{"id": null, "is_host": false, ' + \
                '"has_accepted": true, "event": 1, ' + \
                '"entity": 3, "entity__name": "Sample High", ' + \
                '"event__title": "Homecoming"}'
        print('default EventParticipant json: %s' % default_ep)
        print("EventParticipant json from serializer:\n%s" % json)
        self.assertEqual(json, default_ep)

    def test_deserialize_flat(self):
        default_address = '{"id": null, "is_primary": false, ' + \
                '"address1": "100 Test St.", "address2": null, ' + \
                '"city": "Testville", "state": "TS", ' + \
                '"zip_code": ""}'
        address_stream = StringIO(default_address)
        address_data = JSONParser().parse(address_stream)
        address_serializer = serializers.get_serializer(models.Address)(data=address_data)
        self.assertTrue(address_serializer.is_valid())
        #print('address pre-save: \n%s' %
                #JSONRenderer().render(address_serializer.data))
        #if address_serializer.is_valid():
            #print('number of addresses %s' % len(models.Address.objects.all()))
            #print('saving address')
            #address_serializer.save()
            #print('number of addresses %s' % len(models.Address.objects.all()))
        print('address data: \n%s' %
                JSONRenderer().render(address_serializer.data))
        default_contact = '{"id": null, "name": "John Doe", ' + \
                '"title": ""}'
        #contact_json = JSONRenderer().render(contact_serializer.data)
        contact_stream = StringIO(default_contact)
        contact_data = JSONParser().parse(contact_stream)
        contact_serializer = serializers.get_serializer(models.Contact)(data=contact_data)
        self.assertTrue(contact_serializer.is_valid())
        #print('contact pre-save: \n%s' %
                #JSONRenderer().render(contact_serializer.data))
        #if contact_serializer.is_valid():
            #print('number of contacts %s' % len(models.Contact.objects.all()))
            #print('saving contact')
            #contact_serializer.save()
            #print('number of contacts %s' % len(models.Contact.objects.all()))
        print('contact data: \n%s' %
                JSONRenderer().render(contact_serializer.data))


    def test_deserialize_one_nesting(self):
        ep = get_default_model(models.EventParticipant)
        serializer = serializers.get_serializer(ep.__class__)
        ep_ser = serializer(ep)
        json = JSONRenderer().render(ep_ser.data)
        print(json)
        #default_ep = '{"id": null, "is_host": false, ' + \
                #'"has_accepted": true, "event": 1, ' + \
                #'"entity": 3, "entity__name": "Sample High", ' + \
                #'"event__title": "Homecoming"}'
        stream = StringIO(json)
        ep_data = JSONParser().parse(stream)
        ep_ser2 = serializer(data=ep_data)
        ep_ser2.is_valid()
        #ep_ser2.errors()
        self.assertTrue(ep_ser2.is_valid())
        json = JSONRenderer().render(ep_ser2.data)
        #assertEqual(json, default_ep)
        print('data pre-save:\n%s' % json)
        #print('number of contacts %s' % len(models.Contact.objects.all()))
        #print('number of addresses %s' % len(models.Address.objects.all()))
        #print('number of contact addresses %s' % len(models.ContactAddress.objects.all()))
        ##serializers.ContactAddressSerializer(
        ##print(models.ContactAddress.contact)
        #con_add_serializer.save()
        #print('number of contacts %s' % len(models.Contact.objects.all()))
        #print('number of addresses %s' % len(models.Address.objects.all()))
        #print('number of contact addresses %s' % len(models.ContactAddress.objects.all()))
        #print('data post-save:\n%s' %
                #JSONRenderer().render(con_add_serializer.data))


#class NestedSerializerTest(TestCase):
    #"""
    #Test serializing Nested serializers
#
    #"""
#
    #def test_serialize_flat(self):
        #address = models.Address()
        #contact = models.Contact()
        #address_serializer = serializers.AddressSerializer(address)
        #contact_serializer = serializers.ContactSerializer(contact)
        #address_json = JSONRenderer().render(address_serializer.data)
        #contact_json = JSONRenderer().render(contact_serializer.data)
        #print('address json:\n%s' % address_json)
        #print('contact json:\n%s' % contact_json)
        #default_address = '{"id": null, "is_primary": false, ' + \
                #'"address1": "100 Test St.", "address2": null, ' + \
                #'"city": "Testville", "state": "TS", ' +\
                #'"zip_code": ""}'
        #default_contact = '{"id": null, "name": "John Doe", ' + \
                #'"title": ""}'
        #self.assertEqual(address_json, default_address)
        #self.assertTrue(contact_json, default_contact)
#
    #def test_serialize_nesting(self):
        #address = models.Address()
        ##address.save()
        #contact = models.Contact()
        ##contact.save()
        #con_add = models.ContactAddress()
        #con_add.contact = contact
        #con_add.address = address
        #con_add_ser = serializers.ContactAddressSerializer(con_add)
        #json = JSONRenderer().render(con_add_ser.data)
        #default_con_add = '{"id": null, ' + \
                #'"contact": {"id": null, "name": "John Doe", ' + \
                #'"title": ""}, "address": {"id": null, ' + \
                #'"is_primary": false, "address1": "100 Test St.", ' + \
                #'"address2": null, "city": "Testville", ' + \
                #'"state": "TS", "zip_code": ""}}'
        #print("Contact Address json:\n%s" % json)
        #self.assertEqual(json, default_con_add)
#
    #def test_deserialize_flat(self):
        #default_address = '{"id": null, "is_primary": false, ' + \
                #'"address1": "100 Test St.", "address2": null, ' + \
                #'"city": "Testville", "state": "TS", ' + \
                #'"zip_code": ""}'
        ##address = models.Address()
        ##address_serializer1 = serializers.AddressSerializer(address)
        ##address_json = JSONRenderer().render(address_serializer1.data)
        #address_stream = StringIO(default_address)
        #address_data = JSONParser().parse(address_stream)
        #address_serializer = serializers.get_serializer(models.Address)(data=address_data)
        #self.assertTrue(address_serializer.is_valid())
        #print('address pre-save: \n%s' %
                #JSONRenderer().render(address_serializer.data))
        #if address_serializer.is_valid():
            #address_serializer.save()
            #self.assertTrue(len(models.Address.objects.all), 1)
        #print('address post-save: \n%s' %
                #JSONRenderer().render(address_serializer.data))
        #default_contact = '{"id": null, "name": "John Doe", ' + \
                #'"title": ""}'
        #contact_stream = StringIO(default_contact)
        #contact_data = JSONParser().parse(contact_stream)
        #contact_serializer = serializers.get_serializer(models.Contact)(data=contact_data)
        #self.assertTrue(contact_serializer.is_valid())
        #print('contact pre-save: \n%s' %
                #JSONRenderer().render(contact_serializer.data))
        #if contact_serializer.is_valid():
            #contact_serializer.save()
            #self.assertTrue(len(models.Contact.objects.all), 1)
        #print('contact post-save: \n%s' %
                #JSONRenderer().render(contact_serializer.data))
#
#
    #def test_deserialize_one_nesting(self):
        #default_con_add = '{"id": null, ' + \
                #'"contact": {"id": null, "name": "John Doe", ' + \
                #'"title": ""}, "address": {"id": null, ' + \
                #'"is_primary": false, "address1": "100 Test St.", ' + \
                #'"address2": null, "city": "Testville", ' + \
                #'"state": "TS", "zip_code": ""}}'
        #stream = StringIO(default_con_add)
        #con_add_data = JSONParser().parse(stream)
        #con_add_serializer = \
            #serializers.ContactAddressSerializer(data=con_add_data)
        #self.assertTrue(con_add_serializer.is_valid())
        #print('data pre-save:\n%s' %
                #JSONRenderer().render(con_add_serializer.data))
        #print('number of contacts %s' % len(models.Contact.objects.all()))
        #print('number of addresses %s' % len(models.Address.objects.all()))
        #print('number of contact addresses %s' % len(models.ContactAddress.objects.all()))
        #con_add_serializer.save()
        #print('number of contacts %s' % len(models.Contact.objects.all()))
        #print('number of addresses %s' % len(models.Address.objects.all()))
        #print('number of contact addresses %s' % len(models.ContactAddress.objects.all()))
        #print('data post-save:\n%s' %
                #JSONRenderer().render(con_add_serializer.data))

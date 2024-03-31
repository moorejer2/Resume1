#from django.http import HttpResponse
# from rest_framework import renderers
#from rest_framework.decorators import api_view
#from rest_framework.response import Response
#from rest_framework.reverse import reverse
from rest_framework.viewsets import ModelViewSet
#from rest_framework import generics
from stat_db import models
from stat_db import serializers
from inspect import getmembers, isclass


class FilterModelViewSet(ModelViewSet):

    def get_queryset(self):
        """
        Override to allow query filter by parameters

        """
        query_params = self.request.QUERY_PARAMS
        # Check for presense of any query params
        if len(query_params) > 0:
            print(query_params.dict())
            queryset = self.model.objects.filter(**query_params.dict())
        else:
            print("Returning all objects")
            queryset = self.model.objects.all()
        return queryset


base_viewset_class = FilterModelViewSet
base_viewset_suffix = 'FilterModelViewSet'

# Dynamically generate all viewsets for each serializer
##### Reflect using serializers #####
#for obj_name, obj in getmembers(serializers):
    #if isclass(obj):
        #if issubclass(obj, serializers.base_class) and \
                #not obj is serializers.base_class:
            #model = obj().Meta.model
            #class_name = model.__name__ + base_viewset_suffix
            #globals()[class_name] = type(class_name, (base_viewset_class, ),
                    #{'serializer_class': obj, 'model': obj().Meta.model})
##### Reflect using models and serializer factory #####
for model in models.get_models():
    if 'Augmented' not in model.__name__:
        serializer = serializers.get_serializer(model)
        class_name = model.__name__ + base_viewset_suffix
        globals()[class_name] = type(class_name, (base_viewset_class, ),
                {'serializer_class': serializer, 'model': model})


def get_all_viewsets():
    """
    Iterator for all viewsets in views

    """
    for obj in globals().values():
        if isclass(obj):
            if issubclass(obj, base_viewset_class) and \
                    not obj is base_viewset_class:
                yield obj


# class EventFilterModelViewSet2(ModelViewSet):
    # model = models.Event
    # # model = models.Sport
    # serializer_class = serializers.EventSerializer2
    # queryset = models.Event.objects.all()
    # # queryset = models.Sport.objects.all()
#
#
# class EventList(generics.ListCreateAPIView):
    # model = models.Sport
    # serializer_class = serializers.EventSerializer2
    # # queryset = models.Sport.objects.all()
   #
# class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    # model = models.Sport
    # serializer_class = serializers.EventSerializer2
    # # queryset = models.Sport.objects.all()

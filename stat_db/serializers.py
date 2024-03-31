#from django.forms import widgets
from rest_framework import serializers
from rest_framework.compat import get_concrete_model
from stat_db import models
from django.db import models as db_models
from inspect import getmembers, isclass


base_suffix = 'Serializer'
nesting_depth = 0


class NestedModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = None
        depth = nesting_depth


base_class = NestedModelSerializer


class AugmentedSerializerOptions(serializers.ModelSerializerOptions):
    """
    Meta class options for Serializer
    """
    def __init__(self, meta):
        super(AugmentedSerializerOptions, self).__init__(meta)
        self.augmented = getattr(meta, 'augmented', ())


class AugmentedFlatModelSerializer(serializers.ModelSerializer):

    _options_class = AugmentedSerializerOptions
    field_names = {'name': 1, 'title': 2}

    def to_native(self, obj):
        """
        Add augmented fields to primitives while serializing
        """
        ret = super(AugmentedFlatModelSerializer, self).to_native(obj)
        # Add augmented fields to return dictionary
        extra_fields = models.get_augmented_fields(obj, self.Meta.augmented)
        ret.update(extra_fields)
        return ret

def get_serializer_name(model):
    """
    Return the name of the serializer class given a model to serialize

    """
    return model.__name__ + base_suffix


def get_serializer(model):
    """
    Serializer factory method.
    Generate an appropriate serializer given a model

    """
    global nesting_depth
    class_name = get_serializer_name(model)
    #print('serializer class name: %s' % class_name)
    if class_name in globals().keys():
        return globals()[class_name]
    else:
        # Special handler for Event and EventParticipant
        if model is models.Event or \
                model is models.EventParticipant:
            aug_fields = models.get_augmented_fields(model)
            meta_inner = type('Meta', (), {'model': model,
                                           'depth': nesting_depth,
                                           'augmented': AugmentedFlatModelSerializer.field_names})
            globals()[class_name] = type(class_name, (AugmentedFlatModelSerializer, ),
                {'Meta': meta_inner})
        else:
            meta_inner = type('Meta', (), {'model': model,
                'depth': nesting_depth})
            globals()[class_name] = type(class_name, (base_class, ),
                {'Meta': meta_inner})
            #print('Serializer model class: %s' % globals()[class_name].Meta.model.__name__)
        return globals()[class_name]


# Dynamically generate serializers for all models
for obj_name, obj in getmembers(models):
    if isclass(obj):
        if issubclass(obj, db_models.Model):
            ser_class = get_serializer(obj)
            globals()[ser_class.__name__] = ser_class

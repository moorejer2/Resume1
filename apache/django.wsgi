#!/usr/local/bin/python

import os
import sys
import django.core.handlers.wsgi

import select

syspath = [
    '/usr/local/bin',
    '/usr/local/lib/python2.7/dist-packages/distribute-0.6.36-py2.7.egg',
    '/home/dev/Stats/project',
    '/usr/lib/python2.7',
    '/usr/lib/python2.7/plat-linux2',
    '/usr/lib/python2.7/lib-tk',
    '/usr/lib/python2.7/lib-old',
    '/usr/lib/python2.7/lib-dynload',
    '/usr/local/lib/python2.7/dist-packages',
    '/usr/lib/python2.7/dist-packages',
    '/usr/lib/pymodules/python2.7',
    ]
sys.path = syspath

os.environ['PYTHONPATH'] = '/home/dev/Stats/project'
os.environ['DJANGO_SETTINGS_MODULE'] = 'project.settings'
os.environ['PYTHON_EGG_CACHE'] = '/home/dev/Stats/.python-eggs'

application = django.core.handlers.wsgi.WSGIHandler()


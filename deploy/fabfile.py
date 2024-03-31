from fabric.api import local
from os.path import isfile
import settings


def deploy():
    """ Pulls down latest code and runs and auto-configure tasks """
    local("git checkout master")
    local("git pull")


def install_dependencies():
    local("pip install djangorestframework")
    local("pip install markdown")


def init_mysql(root_pass=''):
    """ Syncs django with initial models in db_stat django app """
    # Get database user parameters dictionary
    settings_file = open(settings.settings_path, 'r')
    params = settings.get_params(settings_file)
    db_name = params["'NAME'"].strip("'")
    user = params["'USER'"]
    pswd = params["'PASSWORD'"]
    print('db=%s\tuser=%s\tpassword=%s' % (db_name, user, pswd))
    # Setting up database
    local("mysql -u root -p%s -e 'create database %s'"
          % (root_pass, db_name))
    # Setup User
    local("mysql -u root -p%s -e \"create user %s@'localhost' \
          identified by %s\"" % (root_pass, user, pswd))
    local("mysql -u root -p%s -e \"create user %s@'%%' \
          identified by %s\"" % (root_pass, user, pswd))
    local("mysql -u root -p%s -e \"grant all privileges on %s.* to \
          %s@'localhost' identified by %s\"" % (root_pass, db_name, user, pswd))
    local("mysql -u root -p%s -e \"grant all privileges on %s.* to \
          %s@'%%' identified by %s\"" % (root_pass, db_name, user, pswd))
    # Ensure all tables are created for any newly added apps
    manage_path = "../project/manage.py"
    local("python %s syncdb" % manage_path)
    # Generate sql to create or modify tables to conform to models defined
    # in db_stat
    local("python %s sql stat_db" % manage_path)
    # Run sql
    local("python %s syncdb" % manage_path)


def use_local_db_settings():
    """ Change the django settings to use credentials specified in
        settings.py.local if it exists

    """
    local = settings.local_path
    if isfile(local):
        try:
            # Opening settings files
            local_file = open(local, 'r')
            settings_file = open(settings.settings_path, 'r+')
            deploy_file = open(settings.deploy_path, 'w')
        except IOError:
            print("Error opening settings files at %" % settings.proj_path)

        # Get local config
        local_config = settings.get_params(local_file)
        # Get current settings.py file contents
        lines = settings_file.readlines()
        #Close current settings.py and reopen as blank file to rewrite
        settings_file.close()

        # Copy current settings file to settings.py.deploy
        for line in lines:
            deploy_file.write(line)
        deploy_file.close()
        # replace Database config section in settings.py and replace values
        settings.sub_params(local_config, lines, settings.settings_path, "DATABASES = {\n")
    settings_file.close()
    local_file.close()


def use_deploy_db_settings():
    """ Change the django settings to use credentials specified in
        settings.py.deploy if it exists

    """
    local = settings.local_path
    if isfile(local):
        try:
            # Opening settings files
            local_file = open(local, 'w')
            settings_file = open(settings.settings_path, 'r+')
            deploy_file = open(settings.deploy_path, 'r')
        except IOError:
            print("Error opening settings files at %" % settings.proj_path)

        # Get deploy config
        deploy_config = settings.get_params(deploy_file)
        deploy_file.close()
        # Get current settings.py file contents
        lines = settings_file.readlines()
        #Close current settings.py to reopen as blank file to rewrite
        settings_file.close()

        # Copy current settings file to settings.py.local
        for line in lines:
            local_file.write(line)
        local_file.close()
        # replace Database config section in settings.py and replace values
        settings.sub_params(deploy_config, lines, settings.settings_path, "DATABASES = {\n")
    settings_file.close()

from os.path import join


proj_path = "../project/project"
local_path = join(proj_path, "settings.py.local")
settings_path = join(proj_path, "settings.py")
deploy_path = join(proj_path, "settings.py.deploy")


def get_params(set_file):
    """ Grab params and values from file and return
        as a dictionary
    """
    lines = set_file.readlines()
    i = lines.index("DATABASES = {\n")
    config = {}
    for line in lines[i + 1:i + 9]:
        line = line.lstrip()
        # Ignore commented lines
        if line[0] is not '#':
            key, val = line.split(':', 1)
            key = key.strip(' ')
            val = val.split(',')[0].strip(' ')
            config[key] = val
    return config


def sub_params(params, lines, out_path, start_string):
    """ Find lines containing given parameters and substitute
        their values and write modified text to set_file

    """
    try:
        out_file = open(out_path, 'w')
    except IOError:
        print("Error opening output file at %" % out_path)

    # Find start section in lines given
    i = lines.index(start_string)
    for line in lines:
        # Modify config lines before writing them out
        if line in lines[i + 1: i + 9]:
            key, val = line.split(':', 1)
            if key.lstrip() in params:
                out_file.write(line.replace(val, params[key.lstrip()]))
            else:
                out_file.write(line)
        # Write all other lines without modification
        else:
            out_file.write(line)
    out_file.close()

import cherrypy
import json
import os.path
from http_connection import HTTPConnection

class DemoPost:
    def demo_post(self, ak, userID):
        host='sandboxrest.schedulestar.com'
        port=8500
        url = '/rest/hssrest/getSport/'
        data = { 'ak': ak, 'userID': userID }
        server = HTTPConnection(host=host, port=port)
        response_obj = server.get_json_response_obj(url, data)
        
        # change all the names to lower case
        for record in response_obj:
            record['NAME'] = record['NAME'].lower()
        return json.dumps(response_obj)
        
    demo_post.exposed = True

conf = os.path.join(os.path.dirname(__file__), 'demo_post.conf')

if __name__ == '__main__':
    cherrypy.quickstart(DemoPost(), config=conf)

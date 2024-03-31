import httplib
import json
import urllib
import xml.etree.ElementTree as etree 

debuglevel = 0#1

def get_xml_string(etree_element):
    return "<?xml version='1.0'?>\n" + etree.tostring(etree_element)
    
class HTTPConnection:
    """ Wrapper for httplib.HTTPConnection
    host -
    port -
    timeout -  in seconds (float)
    
    method - "GET", "POST", ...
    url - a string.  relative to host
    request_body - a string
    request_headers - a dict
    json_obj - any object which can be converted to a json string. (a dict).
    etree_element - xml.etree.ElementTree.Element
    """
    json_request_headers = {
            'Accept': 'application/json, text/javascript;',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            }
    
    def __init__(self, host='127.0.0.1', port='8080', timeout=30.0):
        self.conn = httplib.HTTPConnection(host, port, timeout=timeout)
        self.conn.debuglevel = debuglevel
        
    def __enter__(self):
        return self
    
    def __exit__(self, typ, value, traceback):
        self.close()
    
    def close(self):
        self.conn.close()

    def get(self, method, url, request_body, request_headers={}):
        self.conn.request(method, url, request_body, request_headers)
        response = self.conn.getresponse()

        # error handling can go here
        if self.conn.debuglevel:
            print response.status, response.reason

        return response
  
    def get_json(self, get_func, url, json_obj, request_headers={}):
        """ JSON requests.  object in, object out
        """
        headers = {}
        headers.update(self.json_request_headers)
        headers.update(request_headers)
        request_body =  urllib.urlencode(json_obj)
        return get_func("POST", url, request_body, headers)
                
    def get_json_response(self, url, json_obj, request_headers={}):
        response_body, response_headers = self.get_json(
                self.get_response, 
                url, 
                json_obj, 
                request_headers)
        response_obj = json.loads(response_body)
        return (response_obj, response_headers)
                
    def get_json_response_obj(self, url, json_obj, request_headers={}):
        response_body = self.get_json(
                self.get_response_body, 
                url, 
                json_obj, 
                request_headers)
        response_obj = json.loads(response_body)
        return response_obj

    def get_json_response_headers(self, url, json_obj, request_headers={}):
        response_headers = self.get_json(
                self.get_response_headers, 
                url, 
                json_obj, 
                request_headers)
        return response_headers

    def get_response(self, method, url, request_body, request_headers={}):
        """ requests.  string in (request_body), string out (response_body)
        """
        response = self.get(method, url, request_body, request_headers)
        response_body = response.read()
        response_headers = dict(response.getheaders())
        return (response_body, response_headers)

    def get_response_body(self, method, url, request_body, request_headers={}):
        response = self.get(method, url, request_body, request_headers)
        response_body = response.read()
        return response_body

    def get_response_headers(self, method, url, request_body, request_headers={}):
        response = self.get(method, url, request_body, request_headers)
        response_headers = dict(response.getheaders())
        return response_headers

    def get_xml(self, get_func, url, etree_element, request_headers={}):
        """ XML requests.  etree element in, etree element out
        """
        headers = {}
        headers.update(request_headers)
        request_body = get_xml_string(etree_element)
        return get_func("POST", url, request_body, headers)
                
    def get_xml_response(self, url, etree_element, request_headers={}):
        response_body, response_headers =  self.get_xml(
                self.get_response, 
                url, 
                etree_element, 
                request_headers)
        response_etree_element = etree.fromstring(response_body)
        return (response_etree_element, response_headers)

    def get_xml_response_element(self, url, etree_element, request_headers={}):
        response_body = self.get_xml(
                self.get_response_body, 
                url, 
                etree_element, 
                request_headers)
        print 'xml response body', response_body
        response_etree_element = etree.fromstring(response_body)
        return response_etree_element

    def get_xml_response_headers(self, url, etree_element, request_headers={}):
        return self.get_xml(
                self.get_response_headers, 
                url, 
                etree_element, 
                request_headers)


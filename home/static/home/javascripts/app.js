/////////////////////////////////////////////////////////
// setup our module and configure it
/////////////////////////////////////////////////////////
var module = angular.module('vtech', ['ngResource', 'ngHttpAuthInterceptor']);

module.config(function($locationProvider) {
  $locationProvider.html5Mode(false);
    //$locationProvider.hashPrefix = '!';
  });

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/', { templateUrl: 'intro.html'}).
  when('/discover/:id', {templateUrl: 'portal/discover.html'}).
  when('/test/welcome/:id', {templateUrl: 'portal/test-welcome.html'}).
  when('/test/login/:id', {templateUrl: 'portal/test-login.html'}).
  when('/test/assessment/:id', {templateUrl: 'portal/test-assessment.html'}).
  when('/test/assessment/:id/finished', {templateUrl: 'portal/test-finished.html'}).
  when('/settings', {templateUrl: 'settings.html'}).
  when('/user', {templateUrl: 'user/edit.html'}).
  otherwise({ templateUrl: 'intro.html'});
}]);

/////////////////////////////////////////////////////////
// setup our directives
/////////////////////////////////////////////////////////

module.directive('ngEqualHeights', function($timeout) {
    return { 
        link: function(scope, element, attr) {
            if (! scope.$last) return;

            $timeout(function() {
              var currentTallest = 0; var parent = $(element).parent();

              $(parent).children().each(function(i){
                if ($(this).height() > currentTallest) { currentTallest = $(this).height(); }
              });

              $(parent).children().css({'min-height': currentTallest});
            });
        }
    }
});

module.directive('ngLoginRequired', function() {
  return {
    priority: 99,
    restrict: 'C',
    link: function(scope, element, attr) {
      scope.$on('event:auth-loginRequired', function() {
        $("#login-dialog").modal('show');
      });
      scope.$on('event:auth-loginConfirmed', function() {
        $("#login-dialog").modal('hide');
      });
    }
  }
});

module.directive('ngNavRow', function($window) {
  return {
    link: function(scope, element, attr) {
      element.children('td').not('.ignore').on('click', function () {
        $window.location = attr.ngNavRow;
      })
    }
  }
});

/////////////////////////////////////////////////////////
// a datamapper-esque convenience mixin
/////////////////////////////////////////////////////////
var asAppResource = function($q) {

  this.firstOrNew = function(id) {
    var deferred = $q.defer();
    if (id == 0) deferred.resolve(new this);
    else this.get({id: id}, function(x) { deferred.resolve(x); });
    return deferred.promise;
  };

  this.prototype.$saveOrUpdate = function(id) {
    var deferred = $q.defer();
    if (id == 0) this.$save(function(x) { deferred.resolve(x); });
    else this.$update({id: id}, function(x) { deferred.resolve(x); });
    return deferred.promise;
  };

  return this;
};

/////////////////////////////////////////////////////////
// setup our services
/////////////////////////////////////////////////////////

module.factory('Settings', function() {

  function Settings() {

    this.server = $("#server-url").attr('content');

    this.get = function(key) {
      var val = window.localStorage.getItem(key);
      if (val && val.substring) return JSON.parse(val);
      return undefined;
    };

    this.set = function(key, val) {
      window.localStorage.setItem(key, JSON.stringify(val));
    };
  }

  return new Settings();
});

module.factory('Assessment', function($q, $resource, Settings) {

 var $r = $resource(Settings.server + '/assessments/:id/:action', [], {
   find: { method: 'GET', params: { action: 'find' }},
   finish: { method: 'PUT', params: { action: 'finish' }}
 });

   // mostly for debugging
   $r.reset = function(opts) {
     this.opts = opts || {};
     this.opts['skey'] = "assessment/" + this.opts['tid'];
     window.localStorage.setItem(this.opts['skey'], null);
   };

   $r.vkey = function(opts) {
     this.opts = opts || {};
     this.opts['skey'] = "assessment/" + this.opts['tid'];
     return Settings.get(this.opts['skey']).vkey;
   };

   $r.begin = function(opts) {
     this.opts = opts || {};
     this.opts['skey'] = "assessment/" + this.opts['tid'];

     var deferred = $q.defer();
       //window.localStorage.setItem(this.opts['skey'], null);
       var asmt = Settings.get(this.opts['skey']);

       if (asmt) {
         deferred.resolve(asmt);
         return deferred.promise;
       }

       var self = this;

       asmt = new $r({test_id: this.opts['tid']}); //TODO get real user ID
       asmt.$save(function(r) {
         Settings.set(self.opts['skey'], asmt);
         deferred.resolve(asmt);
         Settings.set('vkey', asmt.vkey);
       });

       return deferred.promise;
     };

    return $r;
   });

module.factory('Competency', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/competencies/:id/:action', [], { });
 asAppResource.call($r, $q);
 return $r;

});

module.factory('Element', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/elements/:id/:action', [], { });
 asAppResource.call($r, $q);
 return $r;

});

module.factory('Organization', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/organizations/:id/:action', [], {
   tests: { method: 'GET', isArray: true, params: { action: 'tests' }}
 });
 asAppResource.call($r, $q);
 return $r;

});

module.factory('Occupation', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/occupations/:id/:action', [], {
   disconnect: { method: 'POST', params: { action: 'disconnect' }}
 });

 asAppResource.call($r, $q);
 return $r;

});

module.factory('Position', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/positions/:id/:action', [], { 
   element: { method: 'POST', params: { action: 'element' }},
   occupation: { method: 'POST', params: { action: 'occupation' }}
 });

 asAppResource.call($r, $q);
 return $r;

});

module.factory('Question', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/questions/:id/:action', [], { });
 asAppResource.call($r, $q);
 return $r;

});

module.factory('Response', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/responses/:id/:action', [], {
   where: { method: 'GET', isArray:true, params: { action: 'where' }}
 });

 asAppResource.call($r, $q);
 return $r;
});

module.factory('ResponseOption', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/response_options/:id/:action', [], {});
 asAppResource.call($r, $q);
 return $r;

});

module.factory('Test', function($q, $resource, Settings) {

 var $r = $resource(Settings.server + '/tests/:id/:action', [], {
   questions: { method: 'GET', isArray:true, params: { action: 'questions' }}
 });

 asAppResource.call($r, $q);

   // mostly for debugging
   $r.reset = function(opts) {
     this.opts = opts || {};
     this.opts['skey'] = "test/" + this.opts['id'] + "/questions";
     window.localStorage.setItem(this.opts['skey'], null);
   };

   $r.begin = function(opts) {
     this.opts = opts || {};
     this.opts['skey'] = "test/" + this.opts['id'] + "/questions";

     var deferred = $q.defer();
     var q = Settings.get(this.opts['skey']);
     if (q) {
       deferred.resolve(q);
       return deferred.promise;
     }
     var self = this;
     this.questions({ id: this.opts['id'] }, function(q) {
           // do a fisher-yates array shuffle
           var i = q.length, j, tempi, tempj;
           if ( i == 0 ) return false;
           while ( --i ) {
             j = Math.floor( Math.random() * ( i + 1 ) );
             tempi = q[i]; tempj = q[j];
             q[i] = tempj; q[j] = tempi;
           }

           Settings.set(self.opts['skey'], q);
           deferred.resolve(q);
         });

     return deferred.promise;
   };

   return $r;
 });

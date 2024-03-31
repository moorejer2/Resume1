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
  when('/', { templateUrl: '/static/home/events/list.html'}).
  when('/events', {templateUrl: '/static/home/events/list.html'}).
  when('/events/:id', {templateUrl: '/static/home/events/edit.html'}).
  when('/participants/:id/:event_id', {templateUrl: '/static/home/participants/edit.html'}).
  when('/events/:event_id/stats', {templateUrl: '/static/stats/football-stats.html'}).
  when('/contacts', {templateUrl: '/static/home/contacts/list.html'}).
  when('/contacts/:id', {templateUrl: '/static/home/contacts/edit.html'}).
  when('/schools', {templateUrl: '/static/home/schools/list.html'}).
  when('/schools/:id', {templateUrl: '/static/home/schools/edit.html'}).
  when('/students', {templateUrl: '/static/home/students/list.html'}).
  when('/students/:id', {templateUrl: '/static/home/students/edit.html'}).
  when('/teams', {templateUrl: '/static/home/teams/list.html'}).
  when('/teams/:id', {templateUrl: '/static/home/teams/edit.html'}).
  when('account', {templateUrl: '/static/home/accounts/edit.html'}).
  otherwise({ templateUrl: '/static/home/events/list.html'});
}]);

/////////////////////////////////////////////////////////
// setup our directives
/////////////////////////////////////////////////////////

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
  };
});

module.directive('ngOnScroll', function() {
    return function(scope, elm, attr) {
        var raw = elm[0];
        elm.bind('scroll', function() {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                scope.$apply(attr.ngOnScroll);
            }
        });
    };
});

module.directive('ngNavRow', function($window) {
  return {
    link: function(scope, element, attr) {
      element.children('td').not('.ignore').on('click', function () {
        // console.log(this);
        $window.location = attr.ngNavRow;
      });
    }
  };
});

module.directive('ngSortRow', function($window) {
  return {
    link: function(scope, element, attr) {
      var args = scope.$eval(attr.ngSortRow);

      // first set default ordering
      scope[args.order] = args.initial;
      
      element.children('th').not('.ignore').on('click', function() {
        var $self = $(this);

        // compute direction
        var direction = false;
        if (typeof $self.data("direction") != 'undefined') direction = ! $self.data("direction");

        // set arrow css
        element.children('th').removeClass("sortcol-up sortcol-down");
        $self.addClass("sortcol-" + (direction ? "up" : "down")).data("direction", direction);
          
        // update angular vars
        scope.$apply(function(scope) {
          scope[args.order] = $self.data('order');
          scope[args.direction] = direction;
        });
      });
    }
  };
});

module.directive('ngFilter', function() {
  return {
      restrict: 'A', replace: true,
      scope: { filter: '=ngFilter' },
      compile: function (tElement, tAttrs) {
          var html = '<div class="filter-box pull-left">'
            + '<input ng-keydown="keydown($event);" class="filter-input" type="text" ng-model="filter" placeholder="Search Items...">'
            + '<i ng-click="search()" style="cursor: pointer" class="reset icon-search"></i>'
            + '</div>';
          tElement.replaceWith(html);
          return {
              post: function (scope, element, attrs) {
              }
          };
      },
      controller: function ($scope, $location) {
          $scope.keydown = function (evt) { 
              if (evt.keyCode != 13) return;
              $scope.$emit('filter-search', $scope.filter); 
          }
          $scope.search = function () { 
              $scope.$emit('filter-search', $scope.filter); 
          }
      }
  }
});

module.directive('ngFieldError', function() {
  return {
      restrict: 'A', replace: true,
      scope: { fieldError: '=ngFieldError' },
      template: '<div ng-show="fieldError" class="alert alert-error alert-block" style="width: 370px"><h4><i class="icon-exclamation-sign"></i>&nbsp;Error: {{fieldError}} </h4></div>',
      link: function(scope, iElement, iAttrs, controller) {
      },
  }
});

module.directive( [ 'focus', 'blur', 'keyup', 'keydown', 'keypress' ].reduce( function ( container, name ) {
    var directiveName = 'ng' + name[ 0 ].toUpperCase( ) + name.substr( 1 );

    container[ directiveName ] = [ '$parse', function ( $parse ) {
        return function ( scope, element, attr ) {
            var fn = $parse( attr[ directiveName ] );
            element.bind( name, function ( event ) {
                scope.$apply( function ( ) {
                    fn( scope, {
                        $event : event
                    } );
                } );
            } );
        };
    } ];

    return container;
}, { } ) );

/////////////////////////////////////////////////////////
// a datamapper-esque convenience mixin
/////////////////////////////////////////////////////////
var asAppResource = function($q) {

  this.firstOrNew = function(id) {
    var deferred = $q.defer();
    if (id == 0) {
      deferred.resolve(new this);
    }
    else this.get({id: id}, function(x) { deferred.resolve(x); });
    return deferred.promise;
  };

  this.prototype.$saveOrUpdate = function(id, scope) {
    var deferred = $q.defer();
    if (typeof scope != 'undefined') scope.$emit("resource.saveOrUpdate");
    if (id == 0) {
        this.$save(function(x) { deferred.resolve(x); }, function(x) { 
            // handle errors, either std. approach or passback to caller
            if (typeof scope != 'undefined') {
                for (var key in x.data) {
                    if (x.data.hasOwnProperty(key)) scope.$emit("resource.alert", key, x.data[key][0]);
                }
            }
            else deferred.reject(x);
        });
    }
    else {
        this.$update({id: id}, function(x) { deferred.resolve(x); }, function(x) { 
            // handle errors, either std. approach or passback to caller
            if (typeof scope != 'undefined') {
                for (var key in x.data) {
                    if (x.data.hasOwnProperty(key)) scope.$emit("resource.alert", key, x.data[key][0]);
                }
            }
            else deferred.reject(x);
        });
    }
    return deferred.promise;
  };

  return this;
};

/////////////////////////////////////////////////////////
// setup our services
/////////////////////////////////////////////////////////

module.factory('Settings', function() {

  function Settings() {

    this.authServer = $("#server-url").attr('content');
    this.server = $("#server-url").attr('content');

    this.get = function(key) {
      var val = window.localStorage.getItem(key);
      if (val && val.substring) return JSON.parse(val);
      return undefined;
    };

    this.set = function(key, val) {
      window.localStorage.setItem(key, JSON.stringify(val));
    };

    this.currentUser = {
        accessLevel: $("#access-level").attr("content"),
        email: $("#current-user").attr("content")
    }
  }

  return new Settings();
});

module.factory('Athlete', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/athlete/:id/:action', [], { });
 asAppResource.call($r, $q);
 return $r;

});

module.factory('Club', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/club/:id/:action', [], { });
 asAppResource.call($r, $q);
 return $r;

});

module.factory('Entity', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/entity/:id/:action', [], { });
 asAppResource.call($r, $q);
 return $r;

});

module.factory('Event', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/event/:id/:action', [], {
   disconnect: { method: 'POST', params: { action: 'disconnect' }},
   connect: {method: 'POST', params: { action: 'connect' }}
 });
 asAppResource.call($r, $q);
 return $r;

});

module.factory('Eventstatus', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/eventstatus/:id/:action', [], { });
 asAppResource.call($r, $q);
 return $r;

});

module.factory('Eventtype', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/eventtype/:id/:action', [], { });
 asAppResource.call($r, $q);
 return $r;

});

module.factory('Facility', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/facility/:id/:action', [], { });
 asAppResource.call($r, $q);
 return $r;

});

module.factory('Gender', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/gender/:id/:action', [], { });
 asAppResource.call($r, $q);
 return $r;

});

module.factory('Level', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/level/:id/:action', [], { });
 asAppResource.call($r, $q);
 return $r;

});

module.factory('Participant', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/eventparticipant/:id/:action', [], { });
 asAppResource.call($r, $q);
 return $r;

});

module.factory('Sport', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/sport/:id/:action', [], { });
 asAppResource.call($r, $q);
 return $r;

});

module.factory('Student', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/student/:id/:action', [], { });
 asAppResource.call($r, $q);
 return $r;

});

module.factory('Statistic', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/statistic/:id/:action', [], { });
 asAppResource.call($r, $q);
 return $r;

});

module.factory('Statistictype', function($resource, $q, Settings) {

 var $r = $resource(Settings.server + '/statistictype/:id/:action', [], { });
 asAppResource.call($r, $q);
 return $r;

});

//module.factory('School', function($resource, $q, Settings) {

// var $r = $resource(Settings.server + '/school/:id/:action', [], { });
// asAppResource.call($r, $q);
// return $r;

//});

//module.factory('Team', function($resource, $q, Settings) {

// var $r = $resource(Settings.server + '/team/:id/:action', [], { });
// asAppResource.call($r, $q);
// return $r;

//});


var baseroutes = angular.module('baseroutes', ['ui.state']) 

baseroutes.config(function($stateProvider, $routeProvider){
$stateProvider
    .state('index', {
        url: "", // root route
        views: {
            "view-primary": {
                templateUrl: "stats/dashboard/"
            }
		}
    })
    .state('profile_1', {
        url: "/profile_1",
        views: {
            "view-primary": {
                templateUrl: "static/templates/Profile-Page1.html"
            }
        }
    })
    .state('profile_2', {
        url: "/profile_2",
        views: {
            "view-primary": {
                templateUrl: "static/templates/Profile-Page2.html"
            }
		}
    })
	.state('pending', {
        url: "/pending",
        views: {
            "view-primary": {
                templateUrl: "static/templates/pending.html"
            }
		}
    })
	.state('user_list', {
        url: "/user_list",
        views: {
            "view-primary": {
                templateUrl: "stats/user_list/"
            }
		}
    })
	.state('event_list', {
        url: "/event_list",
        views: {
            "view-primary": {
                templateUrl: "stats/eventlist/"
            }
		}
    })
	.state('events', {
        url: "/event/{eventId}/",
		views: {
            "view-primary": {
                templateUrl: function (stateParams) {
    				return "stats/event/" + stateParams.eventId + "/";
				}
            }
		}
    })
	.state('teams', {
        url: "/team/{teamId}/",
		views: {
            "view-primary": {
                templateUrl: function (stateParams) {
    				return "stats/team/" + stateParams.teamId + "/";
				}
            }
		}
    })
    .state('eventedit', {
        url: "/eventedit/{eventId}/",
		views: {
            "view-primary": {
                templateUrl: function (stateParams) {
    				return "stats/eventedit/" + stateParams.eventId + "/";
				}
            }
		}
    })
	.state('team_manage', {
        url: "/team_manage/{teamId}/",
		views: {
            "view-primary": {
                templateUrl: function (stateParams) {
    				return "stats/team_manage/" + stateParams.teamId + "/";
				}
            }
		}
    })
	.state('event_entry', {
        url: "/event_entry",
        views: {
            "view-primary": {
                templateUrl: "stats/new_event/"
            }
		}
    })
	.state('event_edit', {
        url: "/event_edit",
        views: {
            "view-primary": {
                templateUrl: "static/templates/event-edit.html"
            }
		}
    })
	.state('forgot_pass', {
        url: "/forgot_pass",
        views: {
            "view-primary": {
                templateUrl: "static/templates/forgot-password.html"
            }
		}
    })
	.state('create_account_1', {
        url: "/create_account_1",
        views: {
            "view-primary": {
                templateUrl: "stats/create_user"
            }
        }
    })
    .state('create_account_2', {
        url: "/create_account_2",
        views: {
            "view-primary": {
                templateUrl: "static/templates/Create-New-Account2.html"
            }
		}
    })
	.state('sport_template_list', {
        url: "/sport_template_list",
        views: {
            "view-primary": {
                templateUrl: "static/templates/sport_template_list.html"
            }
		}
    })
    .state('add-sport-template', {
        url: "/add-sport-template",
        views: {
            "view-primary": {
                templateUrl: "static/templates/add-sport-template.html"
            }
		}
    })
	.state('team_search', {
        url: "/team_search",
        views: {
            "view-primary": {
                templateUrl: "static/templates/team-search.html"
            }
		}
    })
	.state('roster_manage', {
        url: "/roster_manage",
        views: {
            "view-primary": {
                templateUrl: "static/templates/team-manage.html"
            }
		}
    })
	.state('add_athlete', {
        url: "/add_athlete",
        views: {
            "view-primary": {
                templateUrl: "stats/add_athlete"
            }
		}
    })
	.state('add_student', {
        url: "/add_student",
        views: {
            "view-primary": {
                templateUrl: "stats/add_student"
            }
		}
    })
	.state('media_market', {
        url: "/media_market",
        views: {
            "view-primary": {
                templateUrl: "stats/media-market"
            }
		}
    })
    .state('media_detail', {
        url: "/media_detail/{marketId}/",
        views: {
            "view-primary": {
                templateUrl: function (stateParams) {
    				return "stats/market_detail/" + stateParams.marketId + "/";
				}
            }
		}
    })
	.state('football_stats', {
        url: "/football_stats",
        views: {
            "view-primary": {
                templateUrl: "static/templates/football-stats.html"
            }
		}
    })
	.state('stats_list', {
        url: "/stats_list",
        views: {
            "view-primary": {
                templateUrl: "static/templates/Statistic-Listing.html"
            }
		}
    })
	.state('stat_request', {
        url: "/stat_request",
        views: {
            "view-primary": {
                templateUrl: "static/templates/Statistic-Request.html"
            }
		}
    })
})

'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl: 'templates/NewEvent.html',
                controller: 'EditEventController'
            })
            .when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController'
            })
            .when('/event/:eventId',
            {
                // foo: 'bar', adding custom parameters to route
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController'
            })
            .otherwise({redirectTo: '/events'});
    });

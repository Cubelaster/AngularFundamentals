'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
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
                // using template makes it possible for service to return page
                controller: 'EventController',
                resolve: {
                    event: function ($route, eventData) {
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
                // resolve waits for resources to load before rendering page - similar to ng-cloak          
            })
            .otherwise({ redirectTo: '/events' });
        $locationProvider.html5Mode(true);
    });

'use strict';

var eventsApp = angular.module('eventsApp', ['ngCookies', 'ngSanitize', 'ngResource'])
    .factory('myCache', function ($cacheFactory) {
        return $cacheFactory('myCache', {capacity: 3})
    });
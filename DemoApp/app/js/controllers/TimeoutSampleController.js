'use strict';

eventsApp.controller('TimeoutSampleController',
    function ($scope, $timeout) {

        var promise = $timeout(function () {
            $scope.name = "John Doe";
        }, 3000);

        setTimeout(function () {
            $scope.name = 'John Doe';
        }, 3000);

        /* the difference between angular's $timeout
            and JQuery's setTimeout is that angular is aware of
            it's $timeout service model changes,
            while it isn't of those made by the JQuery world.
        */

        $scope.cancel = function () {
            $timeout.cancel(promise);
        }
    });
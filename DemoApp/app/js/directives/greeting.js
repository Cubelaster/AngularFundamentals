'use strict';

eventsApp.directive('greeting', function () {
    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHello()'>Say hello</button>",
        controller: '@', // transports reference
        name: 'ctrl' // points to attribute in html
        // 'GreetingController' //No2  
        // function($scope) {
        //     $scope.sayHello = function () {
        //         alert('Hello!');
        //     }
        // } // this is an example of controller defined in the same line No1
    };
});

eventsApp.controller('GreetingController', function GreetingController($scope) {
    $scope.sayHello = function () {
        alert('Hello');
    }
}); // this is an example of a normal controller simply included in directive //No2
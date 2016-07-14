'use strict';

eventsApp
    .directive('greeting', function () {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,

            template: "<div><button class='btn' ng-click='sayHello()'>Say hello</button><div ng-transclude></div></div>",
            // controller: '@', // transports reference //No2
            // name: 'ctrl' // points to attribute in html //No2
            controller: 'GreetingController' //No2  
            // controller: function ($scope) {
            //     var greetings = ['Hello!'];

            //     $scope.sayHello = function () {
            //         alert(greetings.join());
            //     }
            //     this.addGreeting = function (greeting) {
            //         greetings.push(greeting);
            //     }
            // } // this is an example of controller defined in the same line No1
        };
    })
    .directive('finnish', function () {
        return {
            restrict: 'A',
            require: '^greeting',
            link: function (scope, element, attr, controller) {
                controller.addGreeting('hei');
            }
        }
    })
    .directive('hindi', function () {
        return {
            restrict: 'A',            
            require: '^greeting',
            link: function (scope, element, attr, controller) {
                controller.addGreeting('heil');
            }
        }
    });

eventsApp.controller('GreetingController', function GreetingController($scope) {
    var greetings = ['Hello!'];

    $scope.sayHello = function () {
        alert(greetings.join());
    }
    this.addGreeting = function (greeting) {
        // for some reason it's THIS instead of $scope
        greetings.push(greeting);
    }
}); // this is an example of a normal controller simply included in directive //No2
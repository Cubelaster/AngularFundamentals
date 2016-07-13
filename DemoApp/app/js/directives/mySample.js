'use strict';

eventsApp
    .directive('mySample', function ($compile) {
        // so Angular will translate CamelCase to dashes making mySample to my-sample
        return {
            link: function (scope, element, attrs, controller) {
                var markup = "<input type='text' ng-model='sampleData'/>{{sampleData}}<br />";
                angular.element(element).html($compile(markup)(scope));
            },
            scope: {

            }
        }
    })
    .directive('mySample2', function ($compile) {
        return {
            restrict: 'E', // E is for element, and there are more types
            template: "<input type='text' ng-model='sampleData'/>{{sampleData}}<br />",
            scope: {

            }
        }
    })
    .directive('mySample3', function ($compile) {
        return {
            restrict: 'C', // E is for element, and there are more types and they exclude themselves...
            template: "<input type='text' ng-model='sampleData'/>{{sampleData}}<br />",
            scope: {

            }
        }
    });
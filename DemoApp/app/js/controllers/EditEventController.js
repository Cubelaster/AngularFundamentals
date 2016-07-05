'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {
        $scope.saveEvent = function (event) {
            if (event.name === undefined) {
                window.alert('You need to provide the name!');
            } else {
                window.alert('Event ' + event.name + ' saved!');
            }
        }
        $scope.cancelEdit = function () {
            window.location = "/EventDetails.html";
        }
    }
)
'use strict';

eventsApp.controller('EventController', 
    function EventController($scope, eventData) {
        $scope.event = eventData.event;
        $scope.sortOrder;
        $scope.query;
        

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }
        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    });
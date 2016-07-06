'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $anchorScroll) {

        $scope.sortOrder;
        $scope.query;
        eventData.getEvent()
            .$promise.then(function (event) {
                $scope.event = event;
            })
            .catch(function (response) {
                console.log(response)
            })
            ;

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }

        $scope.scrollToSession = function() {
            $anchorScroll();
            /* this anchorScroll does nothing without the ngRoute.
             However, if we input the hash in the link, it will do 
             it's job. The hash link is determined by id. 
             In this case the id will be generated in the repeater
             and look like session_{{number}}. The link will then 
             look like {{rootLink}}+##id. 
            */
        }
    });
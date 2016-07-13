'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $anchorScroll, $routeParams, $route) {

        // console.log($route.current.foo); 
        // accessing custom parameters from route config
        // console.log($route.current.params.foo); 
        // reading params from url ?foo=bar , and reading normal params like eventId
        // console.log($route.current.pathParams.eventId); // used only to access path params 
        $scope.sortOrder;
        $scope.query;
        $scope.event = $route.current.locals.event; // used to get data off resolve
        // eventData.getEvent($routeParams.eventId)
        //     .$promise.then(function (event) {
        //         $scope.event = event;
        //     })
        //     .catch(function (response) {
        //         console.log(response)
        //     })
        //     ;

        $scope.reload = function () {
            $route.reload();
            // reloads the page WITHOUT reloading entire app
        }

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
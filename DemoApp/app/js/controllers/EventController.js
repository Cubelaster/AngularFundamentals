'use strict';

eventsApp.controller('EventController', 
    function EventController($scope) {
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google Hq',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/139426.png',
            sessions: [
                {name: 'Directives Masterclass',
                 creatorName: 'Bob Smith',
                 duration: '1 hr',
                 level: 'Advanced',
                 abstract: 'Something something',
                 upVoteCount: 0  
                },
                {name: 'Scopes for fun and profit',
                 creatorName: 'John Doe',
                 duration: '30 min',
                 level: 'Introductory',
                 abstract: 'Something something',
                 upVoteCount: 0
                },
                {name: 'Well Behaved Controllers',
                 creatorName: 'Jane Doe',
                 duration: '2 hrs',
                 level: 'Intermediate',
                 abstract: 'Something something',
                 upVoteCount: 0
                }
            ]
        }

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }
        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    });
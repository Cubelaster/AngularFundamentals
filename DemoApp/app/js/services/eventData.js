'use strict';

eventsApp.factory('eventData', function () {
    // eventResource, authService
    return {
        event: {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30 am',
            location: {
                address: 'Google Hq',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'Something something',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'Something something',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'Intermediate Advanced',
                    upVoteCount: 0
                }
            ]
        }
    };
    // return {
    //     getEvent: function(eventId, callback) {
    //         return eventResource.get({id:eventId}, function(event) {
    //             if (callback)
    //                 callback(event);
    //         });
    //     },
    //     getAllEvents: function(callback) {
    //         return eventResource.queryAll(callback);
    //     },
    //     getNextSessionId:function (event) {
    //         var max = 0;
    //         for (var idx = 0; idx < event.sessions.length; idx++) {
    //             if (event.sessions[idx].id > max) {
    //                 max = event.sessions[idx].id;
    //             }
    //         }
    //         return max+1;
    //     },
    //     save: function(event, callback) {
    //         if (event.id) {
    //             eventResource.save(event, function() { if (callback) callback(); });
    //         } else {
    //             eventResource.queryAll(function(events) {
    //                 event.creator = authService.getCurrentUserName();
    //                 event.id = getNextEventId(events);
    //                 event.sessions = [];
    //                 eventResource.save(event);
    //                 if (callback)
    //                     callback();
    //             });
    //         }
    //     }
    // };

    // function getNextEventId(events) {
    //     var max = 0;
    //     for (var idx = 0; idx < events.length; idx++) {
    //         if (events[idx].id > max) {
    //             max = events[idx].id;
    //         }
    //     }
    //     return max+1;
    // }
});
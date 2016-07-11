'use strict';

eventsApp.service('$exceptionHandler', function () {
    return function (exception) {
        console.log("exception handled: " + exception.message);
    };
});
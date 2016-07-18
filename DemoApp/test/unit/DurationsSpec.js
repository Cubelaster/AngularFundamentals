'use strict';

describe('durations', function () {
    beforeEach(module('eventsApp'));

    it('should return correct filter for 1', inject(function(durationsFilter) {
        expect(durationsFilter(1)).toEqual('Half hour');
    }));

});
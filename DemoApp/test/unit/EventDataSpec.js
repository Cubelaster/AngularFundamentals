'use strict';

describe('eventData', function () {

    var $httpBackend, eventData;

    beforeEach(module('eventsApp'));

    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        eventData = $injector.get('eventData');
    }))

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    // it('should issue a GET request to', inject(function (eventData, $httpBackend) {
    //     $httpBackend.expectGET('/data/event/11');
    //     $httpBackend.when('GET', '/data/event/11').respond({});
    //     eventData.getEvent(11);
    //     $httpBackend.flush();

    //     $httpBackend.verifyNoOutstandingExpectation();
    //     $httpBackend.verifyNoOutstandingRequest();
    // }));

    // it('should return correct data on getEvent', inject(function (eventData, $httpBackend) {
    //     $httpBackend.when('GET', '/data/event/11').respond({ name: 'My Event' });
    //     var event = eventData.getEvent(11);
    //     $httpBackend.flush();

    //     expect(event.name).toBe('My Event');
    // }));

        it('should issue a GET request to', function () {
        $httpBackend.expectGET('/data/event/11');
        $httpBackend.when('GET', '/data/event/11').respond({});
        eventData.getEvent(11);
        $httpBackend.flush();
    });

    it('should return correct data on getEvent', function () {
        $httpBackend.when('GET', '/data/event/11').respond({ name: 'My Event' });
        var event = eventData.getEvent(11);
        $httpBackend.flush();

        expect(event.name).toBe('My Event');
    });

    it('should set the id to 999 when saving', function () {
        $httpBackend.when('POST', '/data/event/999').respond({});
        var event = {name: 'My Event'};
        eventData.save(event);
        $httpBackend.flush();

        expect(event.id).toBe(999);
    })

    it('should issue a GET for all events', function () {
        $httpBackend.when('GET', '/data/event').respond([{name: 'My Event'}]);
        var events = eventData.getAllEvents();
        $httpBackend.flush();

        expect(events[0].name).toBe('My Event');

    })
});
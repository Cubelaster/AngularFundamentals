'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('event registration app', function () {

    describe('events page', function () {
        beforeEach(function () {
            browser.get('http://localhost:8000/events/');
        });

        it('should have title and event', function () {
            var list = element.all(by.repeater('event in events'));
            expect(list.count()).toEqual(4);
            var titleElement = element(by.binding('event.name'));
            expect(titleElement.getText()).toEqual('Angular Boot Camp');
        });
    });

    describe('event details page', function () {
        beforeEach(function () {
            browser.get('http://localhost:8000/event/1');
        });

        it('should show details', function () {
            var list = element.all(by.repeater('session in event.sessions'));
            var titleElement = list.first().element(by.binding('title'));
            expect(titleElement.getText()).toEqual('Directives Masterclass');
        });

        it('session number', function () {
            var list = element.all(by.repeater('session in event.sessions'));
            expect(list.count()).toEqual(3);
        });

        it('should show only 1 item', function () {
            var selectEl = element(by.model('query.level'));
            selectEl.element(by.cssContainingText('option', 'Introductory')).click();
            var list = element.all(by.repeater('session in event.sessions'));
            expect(list.count()).toEqual(1);
        });

        it('should sort', function () {
            var selectEl = element(by.model('sortOrder'));
            selectEl.element(by.cssContainingText('option', 'Votes')).click();
            var firstSession = element.all(by.repeater('session in event.sessions')).first();
            var firstSessionName = firstSession.element(by.binding('title')).getText();
            expect(firstSessionName).toEqual('Directives Masterclass');
        });

        it('voting', function () {
            element.all(by.deepCss('div.votingButton')).first().click();
            var firstVoteCount = element.all(by.binding('count')).first();
            expect(firstVoteCount.getText()).toEqual('1');
        });
    });
});
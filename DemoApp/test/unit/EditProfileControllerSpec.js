'use strict';

describe('EditProfileControllerSpec', function () {
    var scope, $controllerConstructor, mockGravatarUrlBuilder;

    beforeEach(module("eventsApp"));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        $controllerConstructor = $controller;
        mockGravatarUrlBuilder = sinon.stub({ buildGravatarUrl: function () { } });
    }));

    it('should build gravatar with the given mail', function () {
        $controllerConstructor('EditProfileController', {
            $scope: scope, gravatarUrlBuilder: mockGravatarUrlBuilder  
        });
 
        var email = 'david.cubela@gmail.com';

        scope.getGravatarUrl(email);

        expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true);
    })
});
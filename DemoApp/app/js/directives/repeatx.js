'use strict';

eventsApp.directive('repeatX', function () {
    return {
        // link: function(scope, element, attributes, controller) {
        //     for (var i = 0; i < Number(attributes.repeatX)-1; i++ ){
        //         element.after($compile(element.clone().attr('repeat-x', 0)) (scope)) ;
        //     }
        // }  // link and compile combined is a bit expensive
        compile: function (element, attributes) {
            for (var i = 0; i < Number(attributes.repeatX) - 1; i++) {
                element.after(element.clone().attr('repeat-x', 0));
            }
            return function(scope, element, attributes, controller) {
                attributes.$observe('text', function(newValue) {
                    if(newValue === 'Hello World') {
                        element.css('color', 'pink');
                    }
                });
            }
        }
    };
});
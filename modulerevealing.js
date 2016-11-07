var RevealingModule = (function() {
    'use strict';

    var privateVar = 0;

    var privateFunction = function() {
        console.log('privateFunction functioning');
        privateVar++;
    };

    var publicFunction1 = function() {
        console.log('publicFunction1 functioning');
    };

    var publicFunction2 = function() {
        console.log('publicFunction2 functioning');
        privateFunction();
    };

    return {
        first: publicFunction1,
        second: publicFunction2
    };

}());

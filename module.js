var Module = (function() {
    'use strict';

    // this variable is private to this module
    var internalVar = 'Hello';

    // this function is private to this module
    var internalFunction = function() {
        console.log('internalFunction functioning: ' + internalVar);
    };

    return {
        publicFunction: function() {
            internalFunction();
            // we can access internalVar from here
            console.log('internalVar: ' + internalVar);
        };
    };

}());

// The module provides access to a publicFunction
Module.publicFunction();
// The module hides internal variables, prints undefined
console.log(Module.internalVar);
// The module hides internal functions, this call throws an Error
try {
    console.log(Module.internalFunction());
} catch (e) {
    console.log(e.name + ': ' + e.message);
}

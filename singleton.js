var Config = (function() {
    'use strict';
    var instance;

    function init() {
      return {
        // Public methods and variables
        getProperty: function (name) {
          console.log('Getting property: ' + name);
          return 'value-for-' + name;
        }
      };
    };

    return {
        instance: function() {
            if(!instance) {
                instance = init();
            }
            return instance;
        }
    };

}());

var config1 = Config.instance();
var config2 = Config.instance();
console.log(config1 === config2); // true

Config.instance().getProperty('tmpDir');

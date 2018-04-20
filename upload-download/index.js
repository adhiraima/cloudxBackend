var random = require('random-number');
var interfaces = {
    getUpload: function() {
        var options = {
                        min: 0, 
                        max:  100,
                        integer: true
                        };
        return random(options);
    },
    getDownload: function() {
        var options = {
                        min: 0, 
                        max:  100,
                        integer: true
                        };
        return random(options);
    }
};

module.exports = interfaces;
var random = require('random-number');
var interfaces = {
    getUpload: function() {
        var options = {
                        min: 0, 
                        max:  100,
                        integer: true
                        };
        return rn(options);
    },
    getDownload: function() {
        var options = {
                        min: 0, 
                        max:  100,
                        integer: true
                        };
        return rn(options);
    }
};

module.exports = interfaces;
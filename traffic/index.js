var http = require('http');

var options = { 
    hostname: 'localhost',
    port: 3000,
    path: '/lua/get_grouped_hosts_data.lua?grouped_by=country',
    method: 'GET'
}

var optionsGeneral = { 
    hostname: 'localhost',
    port: 3000,
    path: '/lua/get_hosts_data.lua?mode=all',
    method: 'GET'
}

var traffic = {
    getTraffic: function(callback) {
        options.headers = {}
        options.headers['Cookie'] = 'session='+global.sessionToken+'; user=admin';
        let results = '';
        var request = http.request(options, function(response) {
            response.on('data', function(chunk) {
                results = results + chunk;
            });
            response.on('end', function() {
                console.log('called in end for country >>>>> ' + results);
                callback(results);
            });
        });
        request.on('error', function(e) {
            console.log('error general >>>> ' + e);
            callback(results);
        });
        request.end();
    },
    getGeneralTraffic: function(callback) {
        let results = '';
        optionsGeneral.headers = {}
        optionsGeneral.headers['Cookie'] = 'session='+global.sessionToken+'; user=admin';
        var request = http.request(optionsGeneral, function(response) {
            response.on('data', function(chunk) {
                results = results + chunk;
            });
            response.on('end', function() {
                console.log('called in end for general >>>>> ' + results);
                callback(results);
            });
        });
        request.on('error', function(e) {
            console.log("error genreal <<<<<<" + e);
            callback(results);
        });
        request.end();
    }
};

module.exports = traffic;
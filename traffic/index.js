var http = require('http');

var options = { 
    hostname: 'localhost',
    port: 3000,
    path: '/lua/get_grouped_hosts_data.lua?grouped_by=country&currentPage=1&perPage=10&sortColumn=column_&sortOrder=desc',
    method: 'GET',
    headers: {'Cookie': 'session='+ global.sessionToken +'; user=admin'}
}

var optionsGeneral = { 
    hostname: 'localhost',
    port: 3000,
    path: '/lua/get_hosts_data.lua?mode=all',
    method: 'GET',
    headers: {'Cookie': 'session='+ global.sessionToken +'; user=admin'}
}

var traffic = {
    getTraffic: function() {
        let results = '';
        var request = http.request(options, function(response) {
                response.on('data', function(chunk) {
                results = results + chunk
            });
            response.on('end', function() {
                return results.data;
            });
        });
        request.on('error', function(e) {
            return results;
        });
        
        request.end();
    },
    getGeneralTraffic: function() {
        let results = '';
        var request = http.request(optionsGeneral, function(response) {
                response.on('data', function(chunk) {
                results = results + chunk
            });
            response.on('end', function() {
                return results.data;
            });
        });
        request.on('error', function(e) {
            return results;
        });
        
        request.end();
    }
};

module.exports = traffic;
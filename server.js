var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('certs/cloudx.key', 'utf8');
var certificate = fs.readFileSync('certs/cloudx.crt', 'utf8');
var express = require('express');

var interfaces = require('./upload-download/index.js');

var credentials = {key: privateKey, cert: certificate};

var app = express();

app.set('port', process.env.PORT || 3300);

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
    res.type('text/html');
    res.sendFile('index.html');
});

app.get('/hosts', function(req, res){
    res.type('text/html');
    res.sendFile('hosts.html');
});

app.get('/uploads', function(req, res) {
    res.type('application/json');
    res.send(JSON.stringify(interfaces.getUpload()));
});

app.get('/downloads', function(req, res) {
    res.type('application/json');
    res.send(JSON.stringify(interfaces.getDownload()));
});

app.use(function(req, res){
 res.type('text/plain');
 res.status(404);
 res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
 console.error(err.stack);
 res.type('text/plain');
 res.status(500);
 res.send('500 - Server Error');
});

var httpsServer = https.createServer(credentials, app);

httpsServer.listen(3300, function(){
    console.log("server running at https://IP_ADDRESS:3300/ psess Ctrl - C to exit!")
});
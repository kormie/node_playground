var socket = require('socket.io');
var express = require('express');
var app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = socket.listen(server);
server.listen(8080);

io.sockets.on('connection', function(client){
  console.log("Client Connected...");

  client.on('question', function(data){
    //client.broadcast.emit('question', data);
    io.sockets.emit('question', data);
  });
});

app.get('/', function(req, resp){
  resp.sendfile(__dirname + '/index.html');
});

app.get('/jquery.js', function(req, resp){
  resp.sendfile(__dirname + '/jquery.js');
});

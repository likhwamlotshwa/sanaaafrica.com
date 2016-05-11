"use strict";

const connect = require('connect');
const http = require('http');
const serveStatic = require('serve-static');
const port = 3000;

const app = connect();

app.use(serveStatic(__dirname + '/sanaaafrica'));

//create node.js http server and listen on port
http.createServer(app).listen(port, function() {
  console.log('Server running at port %s', port);
});

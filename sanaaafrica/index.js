"use strict";

const connect = require('connect');
const http = require('http');
const compression = require('compression')
const st = require('st');
const serveStatic = require('serve-static');
const port = 3000;
const oneHour = (1000 * 60 * 60);


const mount = st({
  path: 'sanaaafrica/', // resolved against the process cwd


  url: '/', // defaults to '/'

  cache: { // specify cache:false to turn off caching entirely
    fd: {
      max: 1000, // number of fd's to hang on to
      maxAge: oneHour, // amount of ms before fd's expire
    },

    stat: {
      max: 5000, // number of stat objects to hang on to
      maxAge: 1000 * 60, // number of ms that stats are good for
    },

    content: {
      max: 1024*1024*64, // how much memory to use on caching contents
      maxAge: oneHour, // how long to cache contents for
                              // if `false` does not set cache control headers
      cacheControl: 'public, max-age=600' // to set an explicit cache-control
                                        // header value
    },

    index: { // irrelevant if not using index:true
      max: 1024 * 8, // how many bytes of autoindex html to cache
      maxAge: oneHour, // how long to store it for
    },

    readdir: { // irrelevant if not using index:true
      max: 1000, // how many dir entries to cache
      maxAge: oneHour, // how long to cache them for
    }
  },

  index: 'index.html', // use 'index.html' file as the index

  dot: true, // allow dot-files to be fetched normally

  cors: false, // default: static assets not accessible from other domains
});


const app = connect();

app.use(mount);
app.use(compression());
app.use(serveStatic(__dirname + '/sanaaafrica'));


//create node.js http server and listen on port
http.createServer(app).listen(port, function() {
  console.log('Server running at port %s', port);
});

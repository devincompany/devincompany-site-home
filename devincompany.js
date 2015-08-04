var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 10001
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'output'
        }
    }
});

// Start the server
server.start(function() {
    console.log('Server is running at >> http://localhost:%d', server.info.port);
});

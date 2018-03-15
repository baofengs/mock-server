'use strict';

const Hapi = require('hapi');
const routes = require('./mock/routes').routes;

// Create a server with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 8999
});

const init = async () => {

    await server.register(require('inert'));

    server.route(routes);

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

init();

const routeConfig = [
    require('./index'),
    require('./foo')
]

let routes = [];

routeConfig.forEach(route => routes = routes.concat(route.routes));

exports.routes = routes;

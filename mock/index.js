exports.routes = [
    {
        method: 'GET',
        path: '/index',
        handler: (req, res) => {
            return require('./json/index.json');
        }
    }
];

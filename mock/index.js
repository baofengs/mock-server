exports.routes = [
    {
        method: 'GET',
        path: '/',
        handler: (req, res) => {
            return require('./json/index.json');
        }
    }
];

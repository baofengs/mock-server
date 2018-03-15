exports.routes = [
    {
        method: 'GET',
        path: '/foo',
        handler: (req, res) => {
            return require('./json/foo/list.json');
        }
    }
];

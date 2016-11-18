const {formatUrl, request} = require('../lib/qxp');

module.exports = {
    build: {
        directory: {
            path: 'dist/client/'
        }
    },
    flightinfo: (req, reply) => {
        const {from, to, date} = req.params;
        const url = formatUrl(from, to, date);

        request(url)
            .then((response) => {
                return reply(response);
            })
            .catch((error) => {
                return reply(error);
            });
    },
    home: (req, reply) => {
        return reply({
            message: `Hello, ${req.auth.credentials.name}`,
            ok: true,
            statusCode: 200
        });
    },
    login: (req, reply) => {
        return reply({
            message: `Hello, ${req.auth.credentials.name}`,
            ok: true,
            statusCode: 200
        });
    }
};
const {
    build,
    flightinfo,
    home,
    login
} = require('./handlers');

module.exports = [{
        method: 'POST',
        path: '/auth/login',
        config: {
            auth: 'simple',
            handler: login
        }
    }, {
        method: 'POST',
        path: '/user/preferences',
        config: {
            auth: 'session',
            handler: home
        }
    }, {
        method: 'GET',
        path: '/{from}/{to}/{date}',
        config: {
            auth: 'session',
            handler: flightinfo
        }
    },{
        method: 'GET',
        path: '/{p*}',
        handler: build
    }
];
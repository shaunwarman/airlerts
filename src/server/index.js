const Assert = require('assert');
const Path = require('path');
const Routes = require('./routes/routes');
const Steerage = require('steerage');

const { validate } = require('./lib/validate');

Assert(process.env.API_KEY, 'API_KEY is not specified!');

Steerage({ config: Path.join(__dirname, '../../config', 'config.json')}, (err, server) => {
    if (err) return console.log(err);

    const cache = server.cache({ segment: 'sessions', expiresIn: 60 * 60 * 1000 });
    server.app.cache = cache;

    server.auth.strategy('simple', 'basic', {validateFunc: validate});
    server.auth.strategy('session', 'cookie', true, {
        password: 'i-really-love-cookies-for-auth-not',
        cookie: 'sid-test',
        isSecure: false,
        validateFunc: function (request, session, callback) {
            console.log(`session id ${JSON.stringify(session.sid)}`);
            cache.get(session.sid, (err, cached) => {

                if (err) {
                    console.log(`err ${err}`);
                    return callback(err, false);
                }

                if (!cached) {
                    console.log(`cache ${JSON.stringify(cached)}`);
                    return callback(null, false);
                }

                console.log(`Success ${JSON.stringify(cached.account)}`);
                return callback(null, true, cached.account);
            });
        }
    });

    console.log(JSON.stringify(server.app.cache));

    server.route(Routes);

    server.start(() => {
        for (let connection of server.connections) {
            console.log(`${connection.settings.labels} server running at ${connection.info.uri}`);
        }
    });
});


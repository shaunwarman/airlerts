const Boom = require('boom');
const Bcrypt = require('bcrypt');
const UUID = require('node-uuid');

const users = {
    shaun: {
        username: 'shaunw321',
        password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
        name: 'Shaun Warman',
        id: '2133d32a'
    }
};

const handleSuccess = (request, user, callback) => {
    console.log(`handle success ${JSON.stringify(user)}`);
    const sid = String(UUID.v4());
    request.server.app.cache.set(sid, { account: user }, 0, (err) => {
        if (err) return callback(err);

        const { id, name } = user;

        request.cookieAuth.set({ sid });

        return callback(null, true, { id, name });
    });
};

module.exports = {
    validate: (request, username, password, callback) => {
        const user = users[username];
        if (!user) {
            return callback(Boom.unauthorized('Bad username or password'), false);
        }

        Bcrypt.compare(password, user.password, (err, isValid) => {

            if (!isValid) {
                err = Boom.unauthorized('Bad username or password');
                return callback(err, isValid, { id: user.id, name: user.name });
            }
            handleSuccess(request, user, callback);
        });
    }
};
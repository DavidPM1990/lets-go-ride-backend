const validateToken = require('../middleware/validateToken.middleware');


module.exports = (app) => {
    app.use('/', require('./index.routes'))

    app.use('/auth', require('./auth.routes'))

    app.use('/events', require('./events.routes'))

    app.use('/profile', validateToken, require('./profile.routes'))
}


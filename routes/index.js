module.exports = (app) => {
    app.use('/', require('./index.routes'))
    app.use('/profile', require('./profile.routes'))
    app.use('/auth', require('./auth.routes'))
    app.use('/events', require('./events.routes'))
}
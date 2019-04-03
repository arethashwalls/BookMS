const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      { User } = require('../models');

passport.use('register', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (username, password, done) => {
    User.create({
        email: username,
        password: password
    })
    .then(user => done(null, user))
}));
 
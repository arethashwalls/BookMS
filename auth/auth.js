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
    .catch(err => done(error))
}));

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (username, password, done) => {
    User.findOne({
        email: username,
        password: password
    })
    .then(user => {
        if(!user) return done(null, false, { message : 'User not found.'});
        user.isValidPassword(password)
        .then(validate => {
            if(!validate) {
                return done(null, false, { message : 'Incorrect password.'});
            } else {
                done(null, user);
            }
        })
        .catch(err => console.log(err));
    })
    .catch(err => done(error))
}));
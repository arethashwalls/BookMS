const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      { User } = require('../models');

passport.use('register', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (username, password, next) => {
    User.create({
        email: username,
        password: password
    })
    .then(user => next(null, user))
    .catch(err => next(error))
}));

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (username, password, next) => {
    User.findOne({
        email: username,
        password: password
    })
    .then(user => {
        if(!user) return next(null, false, { message : 'User not found.'});
        user.isValidPassword(password)
        .then(validate => {
            if(!validate) {
                return next(null, false, { message : 'Incorrect password.'});
            } else {
                next(null, user);
            }
        })
        .catch(err => console.log(err));
    })
    .catch(err => next(error))
}));
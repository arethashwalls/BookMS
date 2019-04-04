const passport = require('passport'),
      { Strategy: LocalStrategy } = require('passport-local'),
      { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt'),
      { User } = require('../models');

passport.use('register', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, next) => {
    User.create({ email, password })
    .then(user => next(null, user))
    .catch(err => next(err))
}));

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, next) => {
    User.findOne({ email })
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
    .catch(err => next(err))
}));

passport.use(new JWTStrategy({
    secretOrKey: "It's a secret!",
    jwtFromRequest: ExtractJwt.fromUrlQueryParameter('secret_token')
}, (token, next) => {
    try {
        return next(null, token.user)
    } catch (err) {
        next(err)
    }
}));

module.exports = passport;
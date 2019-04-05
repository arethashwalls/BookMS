//Imports:
const passport = require('passport'),
      { Strategy: LocalStrategy } = require('passport-local'),
      { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt'),
      { User } = require('../models');

//Define register strategy:
passport.use('register', new LocalStrategy({
    //Name fields appropriately:
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, next) => {
    const { siteTitle } = req.body;
    //Attempt to create new user:
    User.create({ email, password, siteTitle })
    .then(user => next(null, user))
    .catch(err => next(err))
}));

//Define login strategy:
passport.use('login', new LocalStrategy({
    //Name fields appropriately:
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, next) => {
    //Attempt to find matching user:
    User.findOne({ email })
    .then(user => {
        if(!user) return next(null, false, { message : 'User not found.'});
        //Validate password:
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

//Define JWT strategy:
passport.use(new JWTStrategy({
    //Get secret key from .env:
    secretOrKey: process.env.AUTH_SECRET,
    jwtFromRequest: ExtractJwt.fromExtractors([req => {
        let token = null;
        if(req && req.cookies) token = req.cookies['access_token'];
        return token;
    }])
}, (token, next) => {
    try {
        return next(null, token.user)
    } catch (err) {
        next(err)
    }
}));

module.exports = passport;
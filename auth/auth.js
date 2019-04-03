const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      { User } = require('../models');

    //   passport.use('signup', new localStrategy({
    //     usernameField : 'email',
    //     passwordField : 'password'
    //   }, async (email, password, done) => {
    //       try {
    //         //Save the information provided by the user to the the database
    //         const user = await UserModel.create({ email, password });
    //         //Send the user information to the next middleware
    //         return done(null, user);
    //       } catch (error) {
    //         done(error);
    //       }
    //   }));

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
const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      { User } = require('../models');

passport.use('register', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, next) => {
    User.create({ email, password })
    .then(user => next(null, user))
    .catch(err => next(err))
}));
  
  //Create a passport middleware to handle User login
//   passport.use('login', new localStrategy({
//     usernameField : 'email',
//     passwordField : 'password'
//   }, async (email, password, done) => {
//     try {
//       //Find the user associated with the email provided by the user
//       const user = await UserModel.findOne({ email });
//       if( !user ){
//         //If the user isn't found in the database, return a message
//         return done(null, false, { message : 'User not found'});
//       }
//       //Validate password and make sure it matches with the corresponding hash stored in the database
//       //If the passwords match, it returns a value of true.
//       const validate = await user.isValidPassword(password);
//       if( !validate ){
//         return done(null, false, { message : 'Wrong Password'});
//       }
//       //Send the user information to the next middleware
//       return done(null, user, { message : 'Logged in Successfully'});
//     } catch (error) {
//       return done(error);
//     }
//   }));
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
    .catch(err => next(error))
}));
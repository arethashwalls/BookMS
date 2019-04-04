const passport = require('passport'),
      jwt = require('jsonwebtoken'),
      { User } = require('../models');

module.exports = {
    getLogin: (req, res) => {
        res.render('login', {
            title: 'A Scandal in Bohemia'
        })
    },
    postLogin: (req, res) => {
        passport.authenticate('login', (req, res) => {
            res.redirect('/a-scandal-in-bohemia');
        })
        // // passport.authenticate('login', (err, user) => {
        //     if(err || !user) {
        //         const error = new Error('Unable to log in.')
        //         return next(error);
        //     }
        //     req.login(user, { session : false }, error => {
        //         if( error ) return next(error);
        //         const body = { _id : user._id, email : user.email };
        //         const token = jwt.sign({ user : body }, 'Tryin it out');
        //         return res.json({ token });
        //     })
        // })(req, res, next)
    }
}
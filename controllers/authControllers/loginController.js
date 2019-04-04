const passport = require('passport'),
      jwt = require('jsonwebtoken'),
      { User } = require('../../models');

module.exports = {
    getLogin: (req, res) => {
        res.render('login', {
            title: 'A Scandal in Bohemia'
        })
    },
    postLoginAuth: passport.authenticate('login', { session: false } ),
    postLoginRedir: (req, res, next) => {
        const { user } = req;
        req.login(user, { session: false }, err => {
            if(err) return next(err);
            const body = {
                _id: user._id,
                email: user.email
            }
            const token = jwt.sign({user: body}, "It's a secret!");
            res.json(token);
        });
    }
}
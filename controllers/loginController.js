const passport = require('passport'),
      jwt = require('jsonwebtoken'),
      { User } = require('../models');

module.exports = {
    getLogin: (req, res) => {
        res.render('login', {
            title: 'A Scandal in Bohemia'
        })
    },
    postLoginAuth: passport.authenticate('login', { session: false }),
    postLoginRedir: (req, res) => {
        res.redirect('/a-scandal-in-bohemia');
    }
}
const passport = require('passport');
require('../auth/auth');

module.exports = {
    getRegister: (req, res) => {
        res.render('register', {
            title: 'A Scandal in Bohemia'
        })
    },
    postRegisterAuth: passport.authenticate('register', { session : false }),
    postRegisterRedir: (req, res, next) => {
        res.redirect('/admin/login')
    }
}
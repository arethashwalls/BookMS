const passport = require('passport');

module.exports = {
    getRegister: (req, res) => {
        res.render('auth/register', {
            title: 'A Scandal in Bohemia'
        })
    },
    postRegisterAuth: passport.authenticate('register', { session : false }),
    postRegisterRedir: (req, res, next) => {
        res.redirect('/admin/login')
    }
}
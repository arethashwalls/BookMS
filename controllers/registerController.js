const passport = require('passport');

module.exports = {
    getRegister: (req, res) => {
        res.render('register', {
            title: 'A Scandal in Bohemia'
        })
    },
    postRegister: passport.authenticate('register', { session : false }, { 
        successRedirect: '/login',
        failureRedirect: '/register',
        failureFlash: true 
    })
}
const express = require('express'),
      router = express.Router(),
      passport = require('passport'),
      jwt = require('jsonwebtoken'),
      { loginController } = require('../../controllers')

router.route('/register')
    .post(passport.authenticate('register', { session : false }, { 
        successRedirect: '/login',
        failureRedirect: '/register',
        failureFlash: true 
    })) 

module.exports = router;
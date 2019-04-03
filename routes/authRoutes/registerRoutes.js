const express = require('express'),
      router = express.Router(),
      passport = require('passport'),
      jwt = require('jsonwebtoken'),
      { registerController } = require('../../controllers')

router.route('/register')
    .get(registerController.getRegister)
    .post(registerController.postRegister) 

module.exports = router;
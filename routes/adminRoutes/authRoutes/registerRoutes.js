const express = require('express'),
      router = express.Router(),
      passport = require('passport'),
      jwt = require('jsonwebtoken'),
      { registerController } = require('../../../controllers/adminControllers/authControllers')

router.route('/')
    .get(registerController.getRegister)
    .post(registerController.postRegisterAuth, registerController.postRegisterRedir) 

module.exports = router;
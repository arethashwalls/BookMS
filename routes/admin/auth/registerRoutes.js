//Imports:
const express = require('express'),
      router = express.Router(),
      { registerController } = require('../../../controllers').admin.auth;

//Routes:
router.route('/')
    .get(registerController.getRegister)
    .post(registerController.postRegisterAuth, registerController.postRegisterRedir) 

module.exports = router;
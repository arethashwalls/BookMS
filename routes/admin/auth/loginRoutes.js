//Imports:
const express = require('express'),
      router = express.Router(),
      { loginController } = require('../../../controllers').admin.auth;

//Routes:
router.route('/')
    .get(loginController.getLogin)
    .post(loginController.postLoginAuth, loginController.postLoginRedir);

module.exports = router;
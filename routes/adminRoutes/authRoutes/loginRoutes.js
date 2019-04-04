const express = require('express'),
      router = express.Router(),
      { loginController } = require('../../../controllers').adminControllers.authControllers;

router.route('/')
    .get(loginController.getLogin)
    .post(loginController.postLoginAuth, loginController.postLoginRedir);

module.exports = router;
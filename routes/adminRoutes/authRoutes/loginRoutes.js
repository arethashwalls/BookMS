const express = require('express'),
      router = express.Router(),
      { loginController } = require('../../../controllers/authControllers');

router.route('/')
    .get(loginController.getLogin)
    .post(loginController.postLoginAuth, loginController.postLoginRedir);

module.exports = router;
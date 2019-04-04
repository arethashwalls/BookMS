const express = require('express'),
      router = express.Router(),
      { loginController } = require('../../../controllers/authControllers');

router.route('/login')
    .get(loginController.getLogin)
    .post(loginController.postLoginAuth, loginController.postLoginRedir);

module.exports = router;
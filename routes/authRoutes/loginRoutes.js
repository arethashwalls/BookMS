const express = require('express'),
      router = express.Router(),
      { loginController } = require('../../controllers');

router.route('/login')
    .get(loginController.getLogin)
    .post(loginController.postLogin);

module.exports = router;
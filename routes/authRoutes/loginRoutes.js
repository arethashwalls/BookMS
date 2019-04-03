const express = require('express'),
      router = express.Router(),
      passport = require('passport'),
      jwt = require('jsonwebtoken'),
      { loginController } = require('../../controllers');

router.route('/login')
    .get(loginController.getLogin)
    .post(loginController.postLogin);

module.exports = router;
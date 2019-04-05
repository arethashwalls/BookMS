//Imports:
const express = require('express'),
      router = express.Router(),
      { logoutController } = require('../../../controllers').adminControllers.authControllers;

//Routes:
router.route('/')
    .post(logoutController.postLogout);

module.exports = router;
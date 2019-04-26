//Imports:
const express = require('express'),
      router = express.Router(),
      { logoutController } = require('../../../controllers').admin.auth;

//Routes:
router.route('/')
    .post(logoutController.postLogout);

module.exports = router;
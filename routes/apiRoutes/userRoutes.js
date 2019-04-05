const express = require('express'),
      router = express.Router(),
      { userController } = require('../../controllers').apiControllers;

router.route('/title')
    .get(userController.getSiteTitle);

module.exports = router;
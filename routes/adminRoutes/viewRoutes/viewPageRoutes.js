//Imports:
const express = require('express'),
      router = express.Router(),
      { viewPageController } = require('../../../controllers').adminControllers.viewControllers;

router.route('/')
    .get(viewPageController.getViewPages)

module.exports = router;
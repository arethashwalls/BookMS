//Imports:
const express = require('express'),
      router = express.Router(),
      { viewBookController } = require('../../../controllers').adminControllers.viewControllers;

router.route('/')
    .get(viewBookController.getViewBooks)

module.exports = router;
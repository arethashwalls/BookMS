//Imports:
const express = require('express'),
      router = express.Router(),
      { newPageController } = require('../../../controllers').adminControllers.newControllers;

router.route('/')
    .get(newPageController.getNewPage)

module.exports = router;
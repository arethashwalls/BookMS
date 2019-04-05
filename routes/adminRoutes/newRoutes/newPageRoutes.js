//Imports:
const express = require('express'),
      router = express.Router(),
      { newPageController } = require('../../../controllers').adminControllers.newControllers;

router.route('/')
    .get(newPageController.getNewPage)
    .post(newPageController.postNewPage)

module.exports = router;
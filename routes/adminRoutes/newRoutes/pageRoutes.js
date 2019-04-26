//Imports:
const express = require('express'),
      router = express.Router(),
      { pageController } = require('../../../controllers').adminControllers.newControllers;

router.route('/')
    .get(pageController.getNewPage)
    .post(pageController.postNewPage)

module.exports = router;
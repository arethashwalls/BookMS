//Imports:
const express = require('express'),
      router = express.Router(),
      { pageController } = require('../../../controllers').adminControllers.editControllers;

//Routes:
router.route('/:alias')
    .put(pageController.updatePage)

module.exports = router;
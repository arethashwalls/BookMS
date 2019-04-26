//Imports:
const express = require('express'),
      router = express.Router(),
      { pageController } = require('../../../controllers').adminControllers.deleteControllers;

router.route('/')
    .delete(pageController.deletePage);

module.exports = router;
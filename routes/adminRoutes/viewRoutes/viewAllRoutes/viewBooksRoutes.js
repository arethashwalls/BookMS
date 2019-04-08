//Imports:
const express = require('express'),
      router = express.Router(),
      { viewBooksController } = require('../../../../controllers').adminControllers.viewControllers.viewAllControllers;

router.route('/')
    .get(viewBooksController.getViewBooks)

module.exports = router;
//Imports:
const express = require('express'),
      router = express.Router(),
      { viewAuthorsController } = require('../../../../controllers').adminControllers.viewControllers.viewAllControllers;

router.route('/')
    .get(viewAuthorsController.getViewAuthors)

module.exports = router;
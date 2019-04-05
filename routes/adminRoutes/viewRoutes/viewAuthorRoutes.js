//Imports:
const express = require('express'),
      router = express.Router(),
      { viewAuthorController } = require('../../../controllers').adminControllers.viewControllers;

router.route('/')
    .get(viewAuthorController.getViewAuthors)

module.exports = router;
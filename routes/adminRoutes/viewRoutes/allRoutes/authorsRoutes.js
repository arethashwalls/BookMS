//Imports:
const express = require('express'),
      router = express.Router(),
      { authorsController } = require('../../../../controllers').adminControllers.viewControllers.allControllers;

router.route('/')
    .get(authorsController.getAuthors)

module.exports = router;
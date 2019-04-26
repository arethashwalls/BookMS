//Imports:
const express = require('express'),
      router = express.Router(),
      { pagesController } = require('../../../../controllers').adminControllers.viewControllers.allControllers;

router.route('/')
    .get(pagesController.getPages)

module.exports = router;
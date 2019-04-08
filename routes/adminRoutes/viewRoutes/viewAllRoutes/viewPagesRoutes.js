//Imports:
const express = require('express'),
      router = express.Router(),
      { viewPagesController } = require('../../../../controllers').adminControllers.viewControllers.viewAllControllers;

router.route('/')
    .get(viewPagesController.getViewPages)

module.exports = router;
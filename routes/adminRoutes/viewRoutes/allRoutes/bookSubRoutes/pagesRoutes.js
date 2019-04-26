const express = require('express'),
      router = express.Router({mergeParams: true}),
      { viewBookPageController } = require('../../../../../controllers').adminControllers.viewControllers.viewOneControllers;

router.route('/')
      .get(viewBookPageController.viewBookPages);

module.exports = router;
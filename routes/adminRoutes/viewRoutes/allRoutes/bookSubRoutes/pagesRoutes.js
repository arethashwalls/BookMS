const express = require('express'),
      router = express.Router({mergeParams: true}),
      { pagesController } = require('../../../../../controllers').adminControllers.viewControllers.allControllers.bookSubControllers;

router.route('/')
      .get(pagesController.getPages);

module.exports = router;
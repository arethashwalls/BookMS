const express = require('express'),
      router = express.Router({mergeParams: true}),
      { chaptersController } = require('../../../../../controllers').adminControllers.viewControllers.allControllers.bookSubControllers;

router.route('/')
      .get(chaptersController.getChapters);

      module.exports = router;
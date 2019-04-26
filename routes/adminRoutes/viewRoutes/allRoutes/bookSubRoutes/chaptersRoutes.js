const express = require('express'),
      router = express.Router({mergeParams: true}),
      { viewBookChapterController } = require('../../../../../controllers').adminControllers.viewControllers.viewOneControllers;

router.route('/')
      .get(viewBookChapterController.viewBookChapters);

      module.exports = router;
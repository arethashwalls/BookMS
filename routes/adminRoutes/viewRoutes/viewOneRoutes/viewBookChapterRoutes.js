const express = require('express'),
      router = express.Router(),
      { viewBookChapterController } = require('../../../../controllers').adminControllers.viewControllers.viewOneControllers;

router.route('/:alias/chapters')
      .get(viewBookChapterController.viewBookChapters);

      module.exports = router;
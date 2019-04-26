const express = require('express'),
      router = express.Router(),
      { newBookChapterController } = require('../../../controllers').adminControllers.newControllers;

router.route('/:alias')
    .get(newBookChapterController.getNewBookChapter);

module.exports = router;
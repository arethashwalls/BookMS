const express = require('express'),
      router = express.Router({mergeParams: true}),
      { chapterController } = require('../../../../../controllers').adminControllers.viewControllers.oneControllers.bookSubControllers;

router.route('/:ch_num')
      .get(chapterController.getChapter);

module.exports = router;
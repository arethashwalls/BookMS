const express = require('express'),
      router = express.Router({mergeParams: true}),
      { viewChapterController } = require('../../../../../controllers').adminControllers.viewControllers.viewOneControllers;

router.route('/:ch_num')
      .get(viewChapterController.viewChapter);

module.exports = router;
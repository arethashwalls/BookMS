const express = require('express'),
      router = express.Router(),
      { viewChapterController } = require('../../../../controllers').adminControllers.viewControllers.viewOneControllers;

router.route('/:bookAlias/chapter/:ch_num')
      .get(viewChapterController.viewChapter);

module.exports = router;
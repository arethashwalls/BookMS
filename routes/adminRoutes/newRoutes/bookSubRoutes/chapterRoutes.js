const express = require('express'),
      router = express.Router({mergeParams: true}),
      { chapterController } = require('../../../../controllers').adminControllers.newControllers.bookSubControllers;

router.route('/')
    .get(chapterController.getNewBookChapter)
    .post(chapterController.postNewBookChapter);

module.exports = router;
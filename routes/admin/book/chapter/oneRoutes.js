//Imports:
const express = require('express'),
      router = express.Router({mergeParams: true}),
      { createController, deleteController, readController, updateController } = require('../../../../controllers/admin/book/chapter');

router.route('/new')
    .get(createController.getNewChapter)
    .post(createController.postNewChapter);

router.route('/')
    .get(readController.getChapter)
    .put(updateController.updateChapter)
    .delete(deleteController.deleteChapter)

module.exports = router;
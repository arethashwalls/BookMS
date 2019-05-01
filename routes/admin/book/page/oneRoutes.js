//Imports:
const express = require('express'),
      router = express.Router({mergeParams: true}),
      { createController, deleteController, readController, updateController } = require('../../../../controllers/admin/book/page');

router.route('/new')
    .get(createController.getNewPage)
    .post(createController.postNewPage);

router.route('/')
    .get(readController.getPage)
    // .put(updateController.updatePage);
    // .delete(deleteController.deleteChapter)

module.exports = router;
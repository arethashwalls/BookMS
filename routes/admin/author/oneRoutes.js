//Imports:
const express = require('express'),
      router = express.Router({mergeParams: true}),
      { createController, deleteController, readController, updateController } = require('../../../controllers/admin/author');

router.route('/new')
    .get(createController.getNewAuthor)
    .post(createController.postNewAuthor);

router.route('/')
    .get(readController.getAuthor)
    .put(updateController.updateAuthor)
    .delete(deleteController.deleteAuthor)

module.exports = router;
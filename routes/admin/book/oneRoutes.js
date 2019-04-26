//Imports:
const express = require('express'),
      router = express.Router({mergeParams: true}),
      { createController, deleteController, readController, updateController } = require('../../../controllers/admin/book'),
      chapterRoutes = require('./chapter');

router.route('/new')
    .get(createController.getNewBook)
    .post(createController.postNewBook);

router.route('/')
    .get(readController.getBook)
    .put(updateController.updateBook)
    .delete(deleteController.deleteBook);

router.use('/chapters', chapterRoutes);

module.exports = router;
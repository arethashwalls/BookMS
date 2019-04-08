//Imports:
const express = require('express'),
      router = express.Router(),
      { deleteAuthorController } = require('../../../controllers').adminControllers.deleteControllers;

router.route('/')
    .delete(deleteAuthorController.deleteAuthor);

module.exports = router;
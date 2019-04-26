//Imports:
const express = require('express'),
      router = express.Router(),
      { authorController } = require('../../../controllers').adminControllers.deleteControllers;

router.route('/')
    .delete(authorController.deleteAuthor);

module.exports = router;
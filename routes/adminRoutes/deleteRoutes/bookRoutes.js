//Imports:
const express = require('express'),
      router = express.Router(),
      { bookController } = require('../../../controllers').adminControllers.deleteControllers;

router.route('/')
    .delete(bookController.deleteBook);

module.exports = router;
//Imports:
const express = require('express'),
      router = express.Router(),
      { bookController } = require('../../../controllers').adminControllers.editControllers;

//Routes:
router.route('/:alias')
    .put(bookController.updateBook)

module.exports = router;
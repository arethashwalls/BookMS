//Imports:
const express = require('express'),
      router = express.Router(),
      { editBookController } = require('../../../controllers').adminControllers.editControllers;

//Routes:
router.route('/:alias')
    .put(editBookController.updateBook)

module.exports = router;
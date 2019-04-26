//Imports:
const express = require('express'),
      router = express.Router(),
      { editAuthorController } = require('../../../controllers').adminControllers.editControllers;

//Routes:
router.route('/:alias')
    .put(editAuthorController.updateAuthor)

module.exports = router;
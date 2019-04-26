//Imports:
const express = require('express'),
      router = express.Router(),
      { authorController } = require('../../../controllers').adminControllers.editControllers;

//Routes:
router.route('/:alias')
    .put(authorController.updateAuthor)

module.exports = router;
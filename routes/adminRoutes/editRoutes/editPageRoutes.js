//Imports:
const express = require('express'),
      router = express.Router(),
      { editPageController } = require('../../../controllers').adminControllers.editControllers;

//Routes:
router.route('/:alias')
    .put(editPageController.updatePage)

module.exports = router;
//Imports:
const express = require('express'),
      router = express.Router(),
      { editBookController } = require('../../../controllers').adminControllers.editControllers;

//Routes:
router.route('/')
    .get(editBookController.getBookEdit)

module.exports = router;
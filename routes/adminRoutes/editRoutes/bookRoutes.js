//Imports:
const express = require('express'),
      router = express.Router(),
      { bookController } = require('../../../controllers').adminControllers.editControllers;

//Routes:
router.route('/books')
    .get(bookController.getBookEdit)

module.exports = router;
//Imports:
const express = require('express'),
      router = express.Router(),
      { bookController } = require('../../../controllers').adminControllers.newControllers;

router.route('/')
    .get(bookController.getNewBook)
    .post(bookController.postNewBook)

module.exports = router;
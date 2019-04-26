//Imports:
const express = require('express'),
      router = express.Router(),
      { booksController } = require('../../../../controllers').adminControllers.viewControllers.allControllers;

router.route('/')
    .get(booksController.getBooks)

module.exports = router;
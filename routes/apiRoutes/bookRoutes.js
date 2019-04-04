const express = require('express'),
      router = express.Router(),
      { bookController } = require('../../controllers').apiControllers;

router.route('/all')
    .get(bookController.getAllBooks);

module.exports = router;
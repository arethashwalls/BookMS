const express = require('express'),
      router = express.Router(),
      { bookController } = require('../../../controllers/editControllers');

router.route('/books')
    .get(bookController.getBookEdit)

module.exports = router;
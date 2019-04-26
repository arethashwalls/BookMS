//Imports:
const express = require('express'),
      router = express.Router(),
      { readController } = require('../../../controllers/admin/book');

router.route('/')
    .get(readController.getBooks);

module.exports = router;
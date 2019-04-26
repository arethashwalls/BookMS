//Imports:
const express = require('express'),
      router = express.Router(),
      { readController } = require('../../../controllers/admin/author');

router.route('/')
    .get(readController.getAuthors);

module.exports = router;
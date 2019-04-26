//Imports:
const express = require('express'),
      router = express.Router(),
      { readController } = require('../../../../controllers/admin/book/chapter');

router.route('/')
    .get(readController.getChapters);

module.exports = router;
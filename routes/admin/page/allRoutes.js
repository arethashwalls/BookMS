//Imports:
const express = require('express'),
      router = express.Router(),
      { readController } = require('../../../controllers/admin/page');

router.route('/')
    .get(readController.getPages);

module.exports = router;
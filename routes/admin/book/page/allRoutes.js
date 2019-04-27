//Imports:
const express = require('express'),
      router = express.Router({mergeParams: true}),
      { readController } = require('../../../../controllers/admin/book/page');

router.route('/')
    .get(readController.getPages);

module.exports = router;
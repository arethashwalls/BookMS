const express = require('express'),
  router = express.Router(),
  { coverController } = require('../../controllers');

router.route('/:url_title')
    .get(coverController);

module.exports = router;
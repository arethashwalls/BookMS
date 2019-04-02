const express = require('express'),
  router = express.Router(),
  { htmlController } = require('../../controllers');

router.route('/:url_title')
    .get(htmlController.getTitlePage);

module.exports = router;
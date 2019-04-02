const express = require('express'),
  router = express.Router(),
  { htmlController } = require('../../controllers');

router.route('/')
    .get(htmlController.getTitlePage);

module.exports = router;
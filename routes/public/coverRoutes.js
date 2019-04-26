const express = require('express'),
  router = express.Router(),
  { coverController } = require('../../controllers/').publicControllers;

router.route('/:url_title')
    .get(coverController);

module.exports = router;
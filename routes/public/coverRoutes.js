const express = require('express'),
  router = express.Router(),
  { coverController } = require('../../controllers/').publicControllers;

router.route('/:alias')
    .get(coverController);

module.exports = router;
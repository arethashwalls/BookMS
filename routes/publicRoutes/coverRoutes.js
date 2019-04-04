const express = require('express'),
  router = express.Router(),
  { coverController } = require('../../controllers/').publicControllers;

router.route('/')
    .get(coverController);

module.exports = router;
const express = require('express'),
  router = express.Router(),
  { titleController } = require('../../controllers');

router.route('/:url_title')
    .get(titleController);

module.exports = router;
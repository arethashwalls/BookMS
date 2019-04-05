const express = require('express'),
      router = express.Router(),
      { authorController } = require('../../controllers').apiControllers;

router.route('/all')
    .get(authorController.getAllAuthors);

module.exports = router;
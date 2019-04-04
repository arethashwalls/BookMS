const express = require('express'),
      router = express.Router(),
      { bookController } = require('../../../controllers').adminControllers.editControllers;

router.route('/edit')
    .get(bookController.getBookEdit)

module.exports = router;
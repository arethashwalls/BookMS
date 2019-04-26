const express = require('express'),
      router = express.Router(),
      { bookController } = require('../../../../controllers').adminControllers.viewControllers.oneControllers;

router.route('/:alias')
      .get(bookController.getBook);

module.exports = router;
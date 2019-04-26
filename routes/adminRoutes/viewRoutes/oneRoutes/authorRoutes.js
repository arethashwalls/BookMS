const express = require('express'),
      router = express.Router(),
      { authorController } = require('../../../../controllers').adminControllers.viewControllers.oneControllers;

router.route('/:alias')
      .get(authorController.getAuthor);

module.exports = router;
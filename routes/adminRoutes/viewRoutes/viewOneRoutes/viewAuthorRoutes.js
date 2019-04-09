const express = require('express'),
      router = express.Router(),
      { viewAuthorController } = require('../../../../controllers').adminControllers.viewControllers.viewOneControllers;

router.route('/:alias')
      .get(viewAuthorController.viewAuthor);

module.exports = router;
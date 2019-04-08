const express = require('express'),
      router = express.Router(),
      { viewAuthorController } = require('../../../../controllers').adminControllers.viewControllers.viewOneControllers;

router.use('/:id', viewAuthorController.viewAuthor);

module.exports = router;
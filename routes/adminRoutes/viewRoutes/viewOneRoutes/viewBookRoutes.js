const express = require('express'),
      router = express.Router(),
      { viewBookController } = require('../../../../controllers').adminControllers.viewControllers.viewOneControllers;

router.route('/:alias')
      .get(viewBookController.viewBook);

router.route('/:alias/pages')
      .get(viewBookController.viewBookPages);

module.exports = router;
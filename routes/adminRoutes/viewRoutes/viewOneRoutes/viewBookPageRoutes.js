const express = require('express'),
      router = express.Router(),
      { viewBookPageController } = require('../../../../controllers').adminControllers.viewControllers.viewOneControllers;

router.route('/:alias/pages')
      .get(viewBookPageController.viewBookPages);

module.exports = router;
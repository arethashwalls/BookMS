const express = require('express'),
      router = express.Router(),
      { viewPageController } = require('../../../../controllers').adminControllers.viewControllers.viewOneControllers;

router.route('/:alias')
      .get(viewPageController.viewPage);

module.exports = router;
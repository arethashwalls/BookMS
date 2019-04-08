const express = require('express'),
      router = express.Router(),
      { viewPageController } = require('../../../../controllers').adminControllers.viewControllers.viewOneControllers;

router.use('/:alias', viewPageController.viewPage);

module.exports = router;
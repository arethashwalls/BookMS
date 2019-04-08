const express = require('express'),
      router = express.Router(),
      { viewPageController } = require('../../../../controllers').adminControllers.viewControllers.viewOneControllers;

router.use('/:id', viewPageController.viewPage);

module.exports = router;
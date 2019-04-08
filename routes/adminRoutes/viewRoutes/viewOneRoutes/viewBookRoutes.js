const express = require('express'),
      router = express.Router(),
      { viewBookController } = require('../../../../controllers').adminControllers.viewControllers.viewOneControllers;

router.use('/:alias', viewBookController.viewBook);

module.exports = router;
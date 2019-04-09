const express = require('express'),
      router = express.Router(),
      { viewBookInfoController } = require('../../../../controllers').adminControllers.viewControllers.viewOneControllers;

router.use('/:alias', viewBookInfoController.viewBook);

module.exports = router;
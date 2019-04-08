const express = require('express'),
      router = express.Router(),
      { viewBookController } = require('../../../../controllers').adminControllers.viewControllers.viewOneControllers;

router.use('/:url_title', viewBookController.viewBook);

module.exports = router;
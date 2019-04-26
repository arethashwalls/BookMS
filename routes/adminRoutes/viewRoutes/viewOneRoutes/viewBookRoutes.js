const express = require('express'),
      router = express.Router(),
      { viewBookController } = require('../../../../controllers').adminControllers.viewControllers.viewOneControllers;

router.route('/:alias')
      .get(viewBookController.viewBook);

module.exports = router;
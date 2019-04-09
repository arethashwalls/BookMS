const express = require('express'),
      router = express.Router(),
      { viewBookInfoController, viewBookChaptersController } = require('../../../../controllers').adminControllers.viewControllers.viewOneControllers;

router.route('/:alias')
      .get(viewBookInfoController.viewBook);

router.route('/:alias/chapters')
      .get(viewBookChaptersController.viewBookChapters);


module.exports = router;
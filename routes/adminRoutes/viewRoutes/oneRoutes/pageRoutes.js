const express = require('express'),
      router = express.Router(),
      { pageController } = require('../../../../controllers').adminControllers.viewControllers.oneControllers;

router.route('/:alias')
      .get(pageController.getPage);

module.exports = router;
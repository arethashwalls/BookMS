const express = require('express'),
      router = express.Router(),
      { stdalonePageController } = require('../../controllers').apiControllers;

router.route('/all')
    .get(stdalonePageController.getAllStdalonePages);

module.exports = router;
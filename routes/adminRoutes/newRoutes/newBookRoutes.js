//Imports:
const express = require('express'),
      router = express.Router(),
      { newBookController } = require('../../../controllers').adminControllers.newControllers;

router.route('/')
    .get(newBookController.getNewBook)

module.exports = router;
//Imports:
const express = require('express'),
      router = express.Router(),
      { deskController } = require('../../controllers').adminControllers;

router.route('/')
    .get(deskController.getDesk)

module.exports = router;
//Imports:
const express = require('express'),
      router = express.Router(),
      { authorController } = require('../../../controllers').adminControllers.newControllers;

router.route('/')
    .get(authorController.getNewAuthor)
    .post(authorController.postNewAuthor)

module.exports = router;
//Imports:
const express = require('express'),
      router = express.Router(),
      { newAuthorController } = require('../../../controllers').adminControllers.newControllers;

router.route('/')
    .get(newAuthorController.getNewAuthor)
    .post(newAuthorController.postNewAuthor)

module.exports = router;
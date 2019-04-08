//Imports:
const express = require('express'),
      router = express.Router(),
      { deletePageController } = require('../../../controllers').adminControllers.deleteControllers;

router.route('/')
    .delete(deletePageController.deletePage);

module.exports = router;
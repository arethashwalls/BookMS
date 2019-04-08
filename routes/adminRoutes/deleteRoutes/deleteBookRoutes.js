//Imports:
const express = require('express'),
      router = express.Router(),
      { deleteBookController } = require('../../../controllers').adminControllers.deleteControllers;

router.route('/')
    .delete(deleteBookController.deleteBook);

module.exports = router;
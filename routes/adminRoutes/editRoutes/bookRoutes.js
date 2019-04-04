const express = require('express'),
      router = express.Router(),
      { bookController } = require('../../../controllers');

router.route('/')
    .get('/')
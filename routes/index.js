const express = require('express'),
      router = express.Router(),
      public = require('./public'),
      admin = require('./admin');

router.use('/', public);
router.use('/admin', admin);

module.exports = router;
const express = require('express'),
      router = express.Router(),
      bookRoutes = require('./bookRoutes');

router.use('/', bookRoutes)

module.exports = router;
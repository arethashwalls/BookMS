const express = require('express'),
      router = express.Router(),
      coverRoutes = require('./coverRoutes');

router.use('/', coverRoutes);

module.exports = router;
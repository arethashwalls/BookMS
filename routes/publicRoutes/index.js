const express = require('express'),
      router = express.Router(),
      coverRoutes = require('./coverRoutes');

router.use('/:url_title', coverRoutes);

module.exports = router;
const express = require('express'),
      router = express.Router(),
      viewBookRoutes = require('./viewBookRoutes'),
      viewAuthorRoutes = require('./viewAuthorRoutes'),
      viewPageRoutes = require('./viewPageRoutes');

router.use('/book', viewBookRoutes);

module.exports = router;
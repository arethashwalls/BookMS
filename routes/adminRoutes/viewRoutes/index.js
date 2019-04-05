const express = require('express'),
      router = express.Router(),
      viewBookRoutes = require('./viewBookRoutes'),
      viewAuthorRoutes = require('./viewAuthorRoutes');

router.use('/books', viewBookRoutes);
router.use('/authors', viewAuthorRoutes);

module.exports = router;
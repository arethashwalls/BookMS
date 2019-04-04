const express = require('express'),
      router = express.Router(),
      viewBookRoutes = require('./viewBookRoutes');

router.use('/books', viewBookRoutes)

module.exports = router;
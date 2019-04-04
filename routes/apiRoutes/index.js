const express = require('express'),
      router = express.Router(),
      bookRoutes = require('./bookRoutes');

router.use('/books', bookRoutes);

module.exports = router;
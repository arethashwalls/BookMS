const express = require('express'),
      router = express.Router(),
      bookRoutes = require('./bookRoutes');
      authorRoutes = require('./authorRoutes')

router.use('/books', bookRoutes);
router.use('/authors', authorRoutes);

module.exports = router;
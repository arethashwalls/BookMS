const express = require('express'),
      router = express.Router(),
      editBookRoutes = require('./editBookRoutes');

router.use('/books', editBookRoutes)

module.exports = router;
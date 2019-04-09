const express = require('express'),
      router = express.Router(),
      editBookRoutes = require('./editBookRoutes');

router.use('/book', editBookRoutes)

module.exports = router;
const express = require('express'),
      router = express.Router(),
      deleteAuthorRoutes = require('./deleteAuthorRoutes');

router.use('/author', deleteAuthorRoutes)

module.exports = router;
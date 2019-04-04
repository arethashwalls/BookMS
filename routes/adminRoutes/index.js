const express = require('express'),
      router = express.Router(),
      authRoutes = require('./authRoutes');
      editRoutes = require('./editRoutes');

router.use('/', authRoutes, editRoutes)

module.exports = router;
const express = require('express'),
      router = express.Router(),
      viewAllRoutes = require('./viewAllRoutes');

router.use('/all', viewAllRoutes);

module.exports = router;
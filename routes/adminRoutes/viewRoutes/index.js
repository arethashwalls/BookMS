const express = require('express'),
      router = express.Router(),
      viewAllRoutes = require('./viewAllRoutes'),
      viewOneRoutes = require('./viewOneRoutes');

router.use('/all', viewAllRoutes);
router.use('/', viewOneRoutes)

module.exports = router;
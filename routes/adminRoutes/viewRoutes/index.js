const express = require('express'),
      router = express.Router(),
      allRoutes = require('./allRoutes'),
      viewOneRoutes = require('./viewOneRoutes');

router.use('/all', allRoutes);
router.use('/', viewOneRoutes)

module.exports = router;
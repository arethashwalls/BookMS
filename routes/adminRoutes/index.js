const express = require('express'),
      router = express.Router(),
      authRoutes = require('./authRoutes'),
      editRoutes = require('./editRoutes'),
      viewRoutes = require('./viewRoutes'),
      jwtVerify = require('../../controllers').adminControllers.jwtVerify;

router.use('/', authRoutes);
router.use('/edit', jwtVerify, editRoutes);
router.use('/view', jwtVerify, viewRoutes)

module.exports = router;
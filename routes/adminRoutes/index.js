const express = require('express'),
      router = express.Router(),
      authRoutes = require('./authRoutes'),
      editRoutes = require('./editRoutes'),
      deskRoutes = require('./deskRoutes'),
      jwtVerify = require('../../controllers').adminControllers.jwtVerify;

router.use('/', authRoutes);
router.use('/edit', jwtVerify, editRoutes);
router.use('/desk', deskRoutes)

module.exports = router;
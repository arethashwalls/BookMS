const express = require('express'),
      router = express.Router(),
      authRoutes = require('./authRoutes'),
      editRoutes = require('./editRoutes'),
      newRoutes = require('./newRoutes'),
      viewRoutes = require('./viewRoutes'),
      jwtVerify = require('../../controllers').adminControllers.jwtVerify;

router.use('/', authRoutes);
router.use('/edit', jwtVerify, editRoutes);
router.use('/new', jwtVerify, newRoutes);
router.use('/view', jwtVerify, viewRoutes);

module.exports = router;
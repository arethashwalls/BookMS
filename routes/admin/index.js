const express = require('express'),
      router = express.Router(),
      authRoutes = require('./authRoutes'),
      newRoutes = require('./newRoutes'),
      viewRoutes = require('./viewRoutes'),
      editRoutes = require('./editRoutes'),
      deleteRoutes = require('./deleteRoutes'),
      jwtVerify = require('../../controllers').adminControllers.jwtVerify;

router.use('/', authRoutes);
router.use('/new', jwtVerify, newRoutes);
router.use('/view', jwtVerify, viewRoutes);
router.use('/edit', jwtVerify, editRoutes);
router.use('/delete', deleteRoutes);

module.exports = router;
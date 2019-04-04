const express = require('express'),
      router = express.Router(),
      authRoutes = require('./authRoutes');
      editRoutes = require('./editRoutes');
      jwtVerify = require('../../controllers').adminControllers.jwtVerify;

router.use('/', authRoutes);
router.use('/edit', jwtVerify, editRoutes);

module.exports = router;
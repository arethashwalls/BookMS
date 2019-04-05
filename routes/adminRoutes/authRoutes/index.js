const express = require('express'),
      router = express.Router(),
      loginRoutes = require('./loginRoutes'),
      logoutRoutes = require('./logoutRoutes');
      registerRoutes = require('./registerRoutes');

router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);
router.use('/register', registerRoutes);

module.exports = router;
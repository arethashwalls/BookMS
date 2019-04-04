const express = require('express'),
      router = express.Router(),
      loginRoutes = require('./loginRoutes'),
      registerRoutes = require('./registerRoutes');

router.use('/login', loginRoutes)
router.use('/register', registerRoutes)

module.exports = router;
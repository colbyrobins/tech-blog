const router = require('express').Router();
const blogRoutes = require('./blog-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;
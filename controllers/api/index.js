const router = require('express').Router();
const blogRoutes = require('./blog-routes.js');
const userRoutes = require('./user-routes.js');
const commentRoutes = require('./comment-routes.js');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
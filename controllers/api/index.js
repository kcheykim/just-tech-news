const router = require('express').Router();

const userRoutes = require('./user_routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
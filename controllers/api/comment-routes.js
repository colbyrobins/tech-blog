const router = require('express').Router();
const Comment = require('../../models/Comment.js');
const User = require('../../models/User.js');

// route to create comment
router.post("/", async (req, res) => {
    try {
        const userId = await User.findOne({
            where: {
                username: req.session.username.username
            }
        });
        
        const commentData = await Comment.create({
            comment: req.body.commentText,
            creator_id: userId.id,
            post_id: req.body.blogPostId,
        })
        
        res.status(200).json(commentData);
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});

module.exports = router;

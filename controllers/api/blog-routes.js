const router = require("express").Router();
const BlogPost = require("../../models/BlogPost");

// route to create a blog
router.post("/", async (req, res) => {
    try {
        const userId = req.session.user_id;
        const blogData = await BlogPost.create({
            title: req.body.title,
            content: req.body.content,
            creator_id: userId, // Use the user id in the creator_id field
            date_created: new Date(),
        });
        res.status(200).json(blogData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;

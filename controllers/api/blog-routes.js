const router = require("express").Router();
const BlogPost = require("../../models/BlogPost");
const User = require('../../models/User.js')

// route to create a blog
router.post("/", async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.session.username.username
            }
          });
        console.log(userData)
        const blogData = await BlogPost.create({
            title: req.body.title,
            content: req.body.content,
            creator_id: userData.id,
            date_created: new Date(),
        });
        res.status(200).json(blogData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;

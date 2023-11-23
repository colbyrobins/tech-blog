const router = require("express").Router();
const BlogPost = require("../models/BlogPost");

router.get("/", async (req, res) => {
    try {
        const blogData = await BlogPost.findAll();
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        res.render("homepage", { blogs });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

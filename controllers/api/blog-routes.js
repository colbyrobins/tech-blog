const router = require("express").Router();
const BlogPost = require("../../models/BlogPost");

// route to get all blogs
router.get("/", async (req, res) => {
    try {
        const blogData = await BlogPost.findAll();
        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// route to get one blog
router.get("/:id", async (req, res) => {
    try {
        const blogData = await BlogPost.findByPk(req.params.id);
        if (!blogData) {
            res.status(404).json({ message: "No blog found with this id!" });
            return;
        }
        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

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

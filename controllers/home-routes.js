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

// // route to get one blog
// router.get("/:id", async (req, res) => {
//     try {
//         const blogData = await BlogPost.findByPk(req.params.id);
//         if (!blogData) {
//             res.status(404).json({ message: "No blog found with this id!" });
//             return;
//         }
//         res.status(200).json(blogData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;

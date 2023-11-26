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

// Delete post route
router.delete('/:id', async (req, res) => {
    // delete a blog post by its `id` value
    try {
      console.log('Do i make it to the delete call?')
      const blogId = req.params.id;
  
      const blogData = await BlogPost.destroy({
        where: {
          id: blogId
        }
      });
  
      if (blogData === 0) {
        return req.status(403).json({ message: `No blog post found with this id: ${blogId}`});
      }
  
      res.status(200).json({message: 'Blog Post deleted successfully'});
    } catch (err) {
      res.status(500).json({message: 'Server side error'});
    }
  });

module.exports = router;

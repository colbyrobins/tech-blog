const router = require('express').Router();
  const BlogPost = require('../../models/BlogPost')

// route to get all blogs
router.get('/', async (req, res) => {
    const dishData = await BlogPost.findAll().catch((err) => { 
        res.json(err);
      });
        const dishes = dishData.map((dish) => dish.get({ plain: true }));
        res.render('all', { dishes });
      });

module.exports = router;
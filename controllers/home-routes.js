const router = require("express").Router();
const { User } = require("../models");
const BlogPost = require("../models/BlogPost");

router.get("/", async (req, res) => {
    try {
        const blogData = await BlogPost.findAll({
            include: User,
            attributes: {
                exclude: ["password"],
            },
        });
        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render("homepage", { 
            blogs,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Dashboard route 
router.get('/dashboard', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
        return;
    }

    const creatorData = await User.findOne({
        username: req.session.username
    });

    const userBlogPosts = await BlogPost.findAll({
        attributes: [ 'title', 'date_created' ],
        where: {
            creator_id: creatorData.id
        }
    });
    
    const blogs = userBlogPosts.map((blog) => blog.get({ plain: true }));

    res.render("dashboard", {
        blogs,
        loggedIn: req.session.loggedIn
    });

});

// Login route
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
  });

  // Create post route
  router.get('/createPost', (req, res) => {
    if (req.session.loggedIn) {
        res.render('createpost');
    }

  })

module.exports = router;

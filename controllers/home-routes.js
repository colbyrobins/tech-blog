const router = require("express").Router();
const { User, Comment } = require("../models");
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
    try {

        if (!req.session.loggedIn) {
            res.redirect('/login');
            return;
        }

        const creatorData = await User.findOne({
            where: {
                username: req.session.username.username
            }
        }); 
        const userBlogPosts = await BlogPost.findAll({
            attributes: [ 'id', 'title', 'date_created' ],
            where: {
                creator_id: creatorData.id
            }
        });
        
        const blogs = userBlogPosts.map((blog) => blog.get({ plain: true }));
    
        res.render("dashboard", {
            blogs,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.error(err);
        return;
    }

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

  // Signup route
  router.get('/signup', (req, res) => {
    res.render('signup');
  });
  
  // Create post route
 router.get('/createPost', (req, res) => {
   if (req.session.loggedIn) {
       res.render('createpost', {
        loggedIn: req.session.loggedIn
       });
   }
});

router.get('/post/:id', async (req, res) => {
    const blogPostData = await BlogPost.findOne({
        where: {
            id: req.params.id
        }
    });

    const blogComments = await Comment.findAll({
        include: {
            model: User,
            attributes: ['username', 'id']
        },
        where: {
            post_id: req.params.id
        },
    });
    
    const comments = blogComments.map((comment) => comment.get({ plain: true }));
    const blogPost = blogPostData.get({ plain: true });
    
    res.render('post', {
        blogPost,
        comments,
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;

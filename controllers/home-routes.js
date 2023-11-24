const router = require("express").Router();
const { where } = require("sequelize");
const { User } = require("../models");
const BlogPost = require("../models/BlogPost");
const { emit } = require("nodemon");

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
    console.log(req.session)
    // const creatorId = User.findOne({
    //     where: {
    //         email: req.session.
    //     }
    // })

    // const usersBlogsPosts = await BlogPost.findAll({
    //     where: {
            
    //     }
    // })
    res.render('dashboard', {

    })
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


module.exports = router;

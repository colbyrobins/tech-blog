const sequelize = require('../config/connection');
const { BlogPost } = require('../models');


const blogPostData = [
  {
    "title": "My First Blog!!",
    "content": "This is my first blog post!",
    "date_created": "11/22/2022",
    "creator_id": 1
  },
  {
    "title": "My Second Blog!!",
    "content": "This is my second blog post!",
    "date_created": "11/22/2022",
    "creator_id": 2
  },
  {
    "title": "Fifth Blog Post",
    "content": "This is my fifth blog post!",
    "date_created": "11/23/2022",
    "creator_id": 1
  },
  {
    "title": "Sixth Blog Post",
    "content": "This is my sixth blog post!",
    "date_created": "11/23/2022",
    "creator_id": 2
  },
  {
    "title": "Seventh Blog Post",
    "content": "This is my seventh blog post!",
    "date_created": "11/23/2022",
    "creator_id": 3
  },
  {
    "title": "Eighth Blog Post",
    "content": "This is my eighth blog post!",
    "date_created": "11/23/2022",
    "creator_id": 1
  },
  {
    "title": "Ninth Blog Post",
    "content": "This is my ninth blog post!",
    "date_created": "11/23/2022",
    "creator_id": 2
  }
];

const seedBlogPost = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;
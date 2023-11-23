const sequelize = require('../config/connection');
const { BlogPost } = require('../models');


const blogPostData = [
  {
    "title": "My First Blog!!",
    "content": "lernantino",
    "date_created": "11/22/2022",
    "creator_id": 1
  },
  {
    "title": "My Second Blog!!",
    "content": "lernantino",
    "date_created": "11/22/2022",
    "creator_id": 2
  },
  {
    "title": "Fifth Blog Post",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "date_created": "11/23/2022",
    "creator_id": 1
  },
  {
    "title": "Sixth Blog Post",
    "content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    "date_created": "11/23/2022",
    "creator_id": 2
  },
  {
    "title": "Seventh Blog Post",
    "content": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    "date_created": "11/23/2022",
    "creator_id": 3
  },
  {
    "title": "Eighth Blog Post",
    "content": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    "date_created": "11/23/2022",
    "creator_id": 1
  },
  {
    "title": "Ninth Blog Post",
    "content": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    "date_created": "11/23/2022",
    "creator_id": 2
  }
];

const seedBlogPost = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;
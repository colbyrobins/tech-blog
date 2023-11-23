const BlogPost = require('./BlogPost.js')
const Comment = require('./Comment.js');
const User = require('./User.js');

BlogPost.hasMany(Comment);

User.hasMany(BlogPost, {
    foreignKey: 'creator_id'
});




module.exports = { BlogPost, User, Comment };
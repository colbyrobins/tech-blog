const BlogPost = require('./BlogPost.js')
const Comment = require('./Comment.js');
const User = require('./User.js');

BlogPost.hasMany(Comment);

User.hasMany(BlogPost, {
    foreignKey: 'creator_id'
});

BlogPost.belongsTo(User, {
    foreignKey: 'creator_id'
});

User.hasMany(Comment, { foreignKey: 'user_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' });

BlogPost.hasMany(Comment, { foreignKey: 'blog_post_id' });
Comment.belongsTo(BlogPost, { foreignKey: 'blog_post_id' });



module.exports = { BlogPost, User, Comment };
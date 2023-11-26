const BlogPost = require('./BlogPost.js')
const Comment = require('./Comment.js');
const User = require('./User.js');

BlogPost.hasMany(Comment, {
    foreignKey: 'post_id'
});

BlogPost.belongsTo(User, {
    foreignKey: 'creator_id'
});

Comment.belongsTo(BlogPost, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'creator_id'
})

module.exports = { BlogPost, User, Comment };
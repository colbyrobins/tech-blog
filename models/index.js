const BlogPost = require('./BlogPost.js')
const Comment = require('./Comment.js');
const User = require('./User.js');

BlogPost.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

BlogPost.belongsTo(User, {
    foreignKey: 'creator_id'
});

Comment.belongsTo(BlogPost, {
    foreignKey: 'post_id'
});

Comment.hasOne(User, {
    foreignKey: 'id'
})

module.exports = { BlogPost, User, Comment };
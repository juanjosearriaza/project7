const db = require("../config/database");
const { Sequelize, DataTypes } = require("sequelize");
const User = require("./Users");
const Post = require("./Posts");



const Comment = db.define("comment", {  
  comment: {
    type: DataTypes.STRING,
  }, 
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  postId: {
    type: DataTypes.INTEGER,
    references: {
      model: Post,
      key: 'id',
    },
  },  
});

Post.hasMany(Comment)
Comment.belongsTo(User)


module.exports = Comment;

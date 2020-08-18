const db = require("../config/database");
const { Sequelize, DataTypes } = require("sequelize");
const User = require("./Users")


const Post = db.define("post", {
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  hasBeenRead: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
  
});

User.hasMany(Post)
Post.belongsTo(User)


module.exports = Post;

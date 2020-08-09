const db = require("../config/database");
const { Sequelize, DataTypes } = require("sequelize");
const Post = require("./Posts");


const User = db.define("user", {    
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,          
      },  
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,          
      },  
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,       
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,          
      },       
});

module.exports = User;



const db = require("../config/database");
const { Sequelize, DataTypes } = require("sequelize");
const Post = require("./Posts");


const User = db.define("user", {    
      /*id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },*/
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
      /*createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },*/
});

module.exports = User;



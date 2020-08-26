const Sequelize = require('sequelize');

/*module.exports = new Sequelize('worknetwork', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    
  });*/

  module.exports = new Sequelize('worknetwork', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres',
    
  });
  
  
  
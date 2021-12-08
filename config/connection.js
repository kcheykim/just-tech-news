//import the sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize('just_tech_news_db', 'username', 'password', {
    host: 'localhost',
    dialet: 'mysql',
    port: 3006
});

module.exports = sequelize;
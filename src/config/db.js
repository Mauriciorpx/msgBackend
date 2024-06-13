const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "root",
    database: "Mensajeria",
  });

module.exports = sequelize;

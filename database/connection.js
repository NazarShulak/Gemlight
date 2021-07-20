const Sequelize = require('sequelize');

const { constants: { DB_PASSWORD, DB_CONNECTION_STRING } } = require('../constants');

const sequelize = new Sequelize('users', 'admin', DB_PASSWORD, {
    host: DB_CONNECTION_STRING,
    dialect: 'mysql',
    logging: false
});

module.exports = sequelize;

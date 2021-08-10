const Sequelize = require('sequelize');
// const asyncRedis = require('async-redis');

const { constants: { DB_PASSWORD, DB_CONNECTION_STRING, DB_NAME, DB_USER } } = require('../constants');

// const client = asyncRedis.createClient();

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_CONNECTION_STRING,
    dialect: 'mysql',
    logging: false
});

module.exports = {
    // asyncRedis: client,
    sequelize
};

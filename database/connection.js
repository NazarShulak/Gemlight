const Sequelize = require('sequelize');
const redis = require('redis');

const { constants: { DB_PASSWORD, DB_CONNECTION_STRING, DB_NAME, DB_USER } } = require('../constants');

const client = redis.createClient();

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_CONNECTION_STRING,
    dialect: 'mysql',
    logging: false
});

module.exports = {
    redisClient:client,
    sequelize
};

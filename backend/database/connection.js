const Sequelize = require('sequelize');

const { constants: { DB_PASSWORD, DB_CONNECTION_STRING, DB_NAME, DB_USER } } = require('../constants');


const sequelize = new Sequelize(DB_NAME+'', DB_USER+'', DB_PASSWORD+'', {
    host: DB_CONNECTION_STRING+'',
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false
});

module.exports = {
    sequelize
};

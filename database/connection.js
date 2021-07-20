const Sequelize = require('sequelize');

const { constants: { DB_PASSWORD, DB_CONNECTION_STRING, DB_NAME, DB_USER } } = require('../constants');

<<<<<<< HEAD
const sequelize = new Sequelize('users', 'admin', 'superadmin', {
    host: 'api-database.cvhms5uyrffc.us-east-2.rds.amazonaws.com',
=======
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_CONNECTION_STRING,
>>>>>>> 830434f2696aa42d68db2683afcb39d23672bd86
    dialect: 'mysql',
    logging: false
});

module.exports = sequelize;

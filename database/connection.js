const Sequelize = require('sequelize');

const { constants: { DB_PASSWORD, DB_CONNECTION_STRING } } = require('../constants');

const sequelize = new Sequelize('users', 'admin', 'superadmin', {
    host: 'api-database.cvhms5uyrffc.us-east-2.rds.amazonaws.com',
    dialect: 'mysql',
    logging: false
});

module.exports = sequelize;
global.seqelize = sequelize;
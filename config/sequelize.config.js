const { constants: { DB_CONNECTION_STRING, DB_PASSWORD } } = require('../constants');

module.exports = {
    development: {
        username: 'admin',
        password: DB_PASSWORD,
        database: 'users',
        host: DB_CONNECTION_STRING,
        dialect: 'mysql'
    }
};

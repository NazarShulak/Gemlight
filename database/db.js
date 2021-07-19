const mysql = require('mysql2/promise');
const { constants: { DB_PASSWORD, DB_CONNECTION_STRING } } = require('../constants');

const pool = mysql.createPool({
    port: 3306,
    host: DB_CONNECTION_STRING,
    user: 'admin',
    password: DB_PASSWORD,
    database: 'users'
});


pool.getConnection((err) => {
    if (err) return console.log(err);
});

module.exports = pool;


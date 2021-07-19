const mysql = require('mysql2/promise');
const { constants: { DB_PASSWORD, DB_CONNECTION_STRING } } = require('../constants');

(async () => {
    const connection = await mysql.createConnection({
        port: 3306,
        host: DB_CONNECTION_STRING,
        user: 'admin',
        password: DB_PASSWORD,
        database: 'users'
    });


    await connection.connect(err => {
        if (err) return console.log(err);
        console.log('connection is successfully established');
    });
    //
    // const query = await connection.query('SELECT * FROM `userInfo`');
    // console.log(query[0]);

})();


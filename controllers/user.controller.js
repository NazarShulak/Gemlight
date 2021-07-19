const fetch = require('node-fetch');
const { connection } = require('../app');

module.exports = {
    getUsers: async (req, res, next) => {
        try {
            const result = await connection.query('SELECT * FROM userInfo');

            res.json(result[0]);
        } catch (e) {
            next(e);
        }
    },

    createUsers: async (req, res, next) => {
        try {
            const { name, age, email } = req.body;
            const result = await connection.query('INSERT INTO userInfo SET ?', { name, age, email });

            res.json(result, 'created ');
        } catch (e) {
            next(e);
        }
    }
};

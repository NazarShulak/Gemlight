const { connectionPool } = require('../database');

module.exports = {
    getUsers: async (req, res, next) => {
        try {
            const result = await connectionPool.query('SELECT * FROM userInfo');

            res.json(result[0]);
        } catch (e) {
            next(e);
        }
    },

    createUsers: async (req, res, next) => {
        try {
            const { name, age, email } = req.body;
            const result = await connectionPool.query('INSERT INTO userInfo SET ?', { name, age, email });

            res.json(result, 'created ');
        } catch (e) {
            next(e);
        }
    }
};

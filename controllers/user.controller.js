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
        console.log('**********************');
        try {
            const { name, age, email, password } = req.body;
            const result = await connectionPool.insert(null, 'userInfo', { name, age, email, password });
            console.log(result);
        } catch (e) {
            next(e);
        }
        res.json('created ');
    }
};

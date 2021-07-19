const { connectionPool } = require('../database');

module.exports = {
    loginUser: async (req, res, next) => {
        try {
            const { email, password } = req.body;

            const userToLogin = await connectionPool.findOne(`SELECT * FROM userInfo WHERE email=${email}`);

            console.log(userToLogin);

            res.json('you are logged');


        } catch (e) {
            next(e);
        }
    }
};

const { UserModel } = require('../database');

module.exports = {
    loginUser: async (req, res, next) => {
        try {
            const { email, password } = req.body;

            const userToLogin = await UserModel.findOne({ where: { email } });

            console.log(userToLogin);

            res.json(userToLogin);

        } catch (e) {
            next(e);
        }
    }
};

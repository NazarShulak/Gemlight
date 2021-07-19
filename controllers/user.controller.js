const { UserModel } = require('../database');

module.exports = {
    getUsers: async (req, res, next) => {
        try {
            const result = await UserModel.findAll({});

            res.json(result);
        } catch (e) {
            next(e);
        }
    },

    createUsers: async (req, res, next) => {
        try {
            const { name, age, email, password } = req.body;
            await UserModel.create({ name, age, email, password });

            res.json('user is successfully created');
        } catch (e) {
            next(e);
        }
    }
};

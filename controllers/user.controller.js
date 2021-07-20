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
    },

    deleteUsers: async (req, res, next) => {
        try {
            const { user_id } = req.params;

            await UserModel.destroy({ where: { user_id } });

            res.status(204).json('User successfully deleted');
        } catch (e) {
            next(e);
        }
    }
};

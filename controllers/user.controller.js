const { UserModel } = require('../database');
const { passwordService } = require('../services');
const { responseCodesEnum: { CREATED, NO_CONTENT } } = require('../constants');


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
            const { password, ...other } = req.body;
            const hashedPassword = await passwordService.hash(password);

            const createdUser = await UserModel.create({ password: hashedPassword, ...other });

            res.status(CREATED).json(createdUser);
        } catch (e) {
            next(e);
        }
    },

    updateUsers: async (req, res, next) => {
        try {


        } catch (e) {
            next(e);
        }
    },

    deleteUsers: async (req, res, next) => {
        try {
            const { user_id } = req.params;

            await UserModel.destroy({ where: { user_id } });

            res.status(NO_CONTENT).json('User successfully deleted');
        } catch (e) {
            next(e);
        }
    }
};

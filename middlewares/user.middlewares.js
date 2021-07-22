const { UserModel } = require('../database');
const { userValidators: { createUser } } = require('../validators');

module.exports = {
    checkIfUserExist: async (req, res, next) => {
        try {
            const { email } = req.body;

            const user = await UserModel.findOne({ where: { email } });

            if (user) {
                throw new Error('User is already registered');
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkUserForCreation: (req, res, next) => {
        try {
            const { error } = createUser.validate(req.body);

            if (error) {
                throw new Error('Bad input data!');
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkIfUserExistById: async (req, res, next) => {
        try {
            const { userId } = req.body;

            const user = await UserModel.findOne({ where: { user_id: userId } });

            if (!user) {
                throw new Error('Wrong userId');
            }

            next();
        } catch (e) {
            next(e);
        }
    }
}
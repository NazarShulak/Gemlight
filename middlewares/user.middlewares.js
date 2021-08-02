const { responseCodesEnum: { CONFLICT, BAD_REQUEST } } = require('../constants');
const { UserModel } = require('../database');
const { ErrorHandler } = require('../error');
const { userValidators: { createUser } } = require('../validators');
const { log } = require("nodemon/lib/utils");

module.exports = {
    checkIfUserExist: async (req, res, next) => {
        try {
            const { email } = req.body;

            if (!email){
                throw new ErrorHandler(BAD_REQUEST, 'Email must be provided', 4003);
            }

            const user = await UserModel.findOne({ where: { email } });

            if (user) {
                throw new ErrorHandler(CONFLICT, 'User is already registered', 4090);
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
                throw new ErrorHandler(BAD_REQUEST, 'Bad input data!', 4000);
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
                throw new ErrorHandler(CONFLICT, 'Wrong userId', 4091);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
}
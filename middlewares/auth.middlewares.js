const { constants: { AUTHORIZATION }, errorCodesEnum: { CONFLICT, BAD_REQUEST } } = require('../constants');
const { UserModel, AuthModel } = require('../database');
const { redisClient } = require('../database/connection');
const { ErrorHandler } = require('../error');
const { authValidators: { checkUserLoginBody } } = require('../validators');
const { authService, passwordService } = require('../services');

module.exports = {
    userBodyCheck: async (req, res, next) => {
        try {
            const { error } = checkUserLoginBody.validate(req.body);

            if (error) {
                throw new ErrorHandler(BAD_REQUEST, 'Bad input data!', 4000);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkUserLogin: async (req, res, next) => {
        try {
            const { email } = req.body;
            const user = await UserModel.findOne({ where: { email } });

            if (!user) {
                throw new Error(CONFLICT, 'Wrong email or password', 4093);
            }

            req.user = user;
            next();
        } catch (e) {
            next(e);
        }
    },

    checkUserPasswordValidity: async (req, res, next) => {
        try {
            const { body: { password }, user: { password: hashedPassword } } = req;

            await passwordService.compare(hashedPassword, password);

            next();
        } catch (e) {
            next(e);
        }
    },

    checkAccessToken: async (req, res, next) => {
        try {
            const token = req.get(AUTHORIZATION);

            if (!token) {
                throw new ErrorHandler(BAD_REQUEST, 'No token', 4001);
            }

            await authService.verifyToken(token);

            const tokenObject = await AuthModel.findOne({ where: { accessToken: token } });

            if (!tokenObject) {
                throw new ErrorHandler(BAD_REQUEST, 'Wrong token', 4005);
            }

            req.user = tokenObject.user;

            next();
        } catch (e) {
            next(e);
        }
    },

    checkIfUserLogged: async (req, res, next) => {
        try {
            const { user: { user_id } } = req;

            const logged = await redisClient.exists(user_id);

            if (logged) {
                throw new ErrorHandler(BAD_REQUEST, 'Already logged', 4003);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};


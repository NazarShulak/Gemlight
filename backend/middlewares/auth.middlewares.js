const {
    constants: { AUTHORIZATION },
    responseCodesEnum: { CONFLICT, BAD_REQUEST, UNAUTHORIZED }
} = require('../constants');
const { UserModel, AuthModel } = require('../database');
const { ErrorHandler } = require('../error');
const { authValidators: { checkUserLoginBody } } = require('../validators');
const { authService, passwordService } = require('../services');
const { asyncRedis } = require("../database/connection");

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
                throw new ErrorHandler(CONFLICT, 'Wrong email or password', 4093);
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
            const { user_id } = req.params;

            if (!token) {
                throw new ErrorHandler(BAD_REQUEST, 'No token', 4001);
            }

            await authService.verifyToken(token);

            // const userWithTokens = await asyncRedis.get(user_id)
            const tokenObject = await AuthModel.findOne({ where: { accessToken: token } })

            console.log(tokenObject);
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
            const { user_id, ...data } = req.body;

            const loggedUser = await AuthModel.findOne({ where: { userId: user_id } });
            // const logged = await redisClient.exists(user_id);

            if (!loggedUser) {
                throw new ErrorHandler(UNAUTHORIZED, 'You are not logged', 4010);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isUserLoggedIn: (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.sendStatus(401);
        }
    }

};


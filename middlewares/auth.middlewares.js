const { UserModel } = require('../database');
const { authValidators: { checkUserLoginBody } } = require('../validators');
const { authService, passwordService } = require('../services');
const { constants: { AUTHORIZATION } } = require('../constants');

module.exports = {
    userBodyCheck: async (req, res, next) => {
        try {
            const { error } = checkUserLoginBody.validate(req.body);

            if (error) {
                throw new Error('Bad input data!');
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
                throw new Error('Wrong email or password');
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
                throw new Error('No token');
            }

            await authService.verifyToken(token);

            const tokenObject = await UserModel.findOne({ where: { accessToken: token } });

            if (!tokenObject) {
                throw new Error('Wrong token');
            }

            req.user = tokenObject.user;

            next();
        } catch (e) {
            next(e);
        }
    }
};


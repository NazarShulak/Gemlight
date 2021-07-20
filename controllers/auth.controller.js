const { authService } = require('../services');
const { UserModel } = require('../database');
const { constants: { AUTHORIZATION } } = require('../constants');

module.exports = {
    loginUser: async (req, res, next) => {
        try {
            const { user_id } = req.user;
            const tokenPair = authService.generateTokens();

            await UserModel.create({ ...tokenPair, user: user_id });

            res.json({ ...tokenPair, user: req.user });
        } catch (e) {
            next(e);
        }
    },

    logout: async (req, res, next) => {
        try {
            const { accessToken } = req.user;

            await UserModel.destroy({ accessToken });

            res.status(204).json('USER_LOGOUT');
            next();
        } catch (e) {
            next(e);
        }
    },

    refresh: async (req, res, next) => {
        try {
            const refreshToken = req.get(AUTHORIZATION);
            const { user } = req;
            const tokenPair = authService.generateTokens();

            await UserModel.u({ refreshToken }, { ...tokenPair });

            res.json({ ...tokenPair, user });
        } catch (e) {
            next(e);
        }
    }
};

const { authService } = require('../services');
const { AuthModel } = require('../database');
const { constants: { AUTHORIZATION } } = require('../constants');

module.exports = {
    loginUser: async (req, res, next) => {
        try {
            const { user_id } = req.user;
            const tokenPair = authService.generateTokens();

            const user = await AuthModel.findOne({ userId: user_id });

            if (user) {
                await AuthModel.update({ ...tokenPair }, { where: { userId: user_id } });
            } else {
                await AuthModel.create({ ...tokenPair, userId: user_id });
            }

            res.json({ ...tokenPair, user: req.user });
        } catch (e) {
            next(e);
        }
    },

    logout: async (req, res, next) => {
        try {
            const { accessToken } = req.user;

            await AuthModel.destroy({ where: { accessToken } });

            res.json('USER_LOGOUT');
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

            await AuthModel.update({ ...tokenPair }, { where: { refreshToken } });

            res.json({ ...tokenPair, user });
        } catch (e) {
            next(e);
        }
    }
};

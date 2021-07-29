const { constants: { AUTHORIZATION } } = require('../constants');
const { AuthModel } = require('../database');
const { asyncRedis } = require('../database/connection');
const { ErrorHandler } = require("../error");
const { authService } = require('../services');
const { promisify } = require('util');


module.exports = {
    loginUser: async (req, res, next) => {
        try {
            const date = new Date();
            const { user_id } = req.user;
            const tokenPair = authService.generateTokens();

            await asyncRedis.set(user_id + '', JSON.stringify(tokenPair));
            // const user = await AuthModel.create({
            //     userId: user_id, ...tokenPair,
            //     expireAt: date.setDate(date.getDate() + 1)
            // });
            const user = await asyncRedis.get(user_id);

            // res.json(user);
            res.json({ ...JSON.parse(user), user: req.user });
        } catch (e) {
            next(e);
        }
    },

    logout: async (req, res, next) => {
        try {
            const { user_id } = req.user;

            await asyncRedis.del(user_id);

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

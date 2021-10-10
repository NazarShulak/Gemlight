const bcrypt = require("bcrypt");
const { UserModel, AuthModel } = require('../database');
const { constants: { REFRESH } } = require('../constants');
const { authService: { verifyToken } } = require('../services');

const fakeUserEmail = 'test@test.co';

module.exports = {
    passwordCheck: async (password, hashedPassword) => {
        return await bcrypt.compare(password, hashedPassword);
    },

    dbValueCheck: async (name, email) => {

        const userFromDb = await UserModel.findOne({ where: { email: fakeUserEmail } });

        const nameCheck = name === userFromDb.name;
        const emailCheck = email === userFromDb.email;

        return nameCheck && emailCheck;
    },

    dbTokensCheck: async (accessToken, refreshToken) => {
        const userFromDb = await UserModel.findOne({ where: { email: fakeUserEmail } });
        const authUserData = await AuthModel.findOne({ where: { userId: userFromDb.user_id } });

        const accessTokenCheck = accessToken === authUserData.accessToken;
        const refreshTokenCheck = refreshToken === authUserData.refreshToken;

        if (accessTokenCheck && refreshTokenCheck) {
            try {
                await verifyToken(accessToken);
                await verifyToken(refreshToken, REFRESH);
            } catch (e) {
                if (e) {
                    return false;
                }
            }
            return true;
        }

        return false;
    }
};

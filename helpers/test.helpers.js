const bcrypt = require("bcrypt");
const { authService: { verifyToken } } = require('../services');
const { UserModel, AuthModel } = require('../database');


module.exports = {
    passwordCheck: async (password, hashedPassword) => {
        return await bcrypt.compare(password, hashedPassword);
    },

    dbValueCheck: async (name, age, email) => {
        const userFromDb = await UserModel.findOne({ where: { email: 'test@test.co' } });

        const nameCheck = name === userFromDb.name;
        const ageCheck = age === userFromDb.age;
        const emailCheck = email === userFromDb.email;

        return nameCheck && ageCheck && emailCheck;
    },

    dbTokensCheck: async (accessToken, refreshToken) => {
        const userFromDb = await UserModel.findOne({ where: { email: 'test@test.co' } });
        const authUserData = await AuthModel.findOne({ where: { userId: userFromDb.user_id } });

        const accessTokenCheck = accessToken === authUserData.accessToken;
        const refreshTokenCheck = refreshToken === authUserData.refreshToken;

        if (accessTokenCheck && refreshTokenCheck) {
            try {
                await verifyToken(accessToken);
                await verifyToken(refreshToken, 'REFRESH');
            } catch (e) {
                console.log(e);
                if (!e) {
                    return true;
                }
            }
        }

        return false;
    }
};

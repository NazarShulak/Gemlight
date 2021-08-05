const { UserModel } = require('../database');
const { passwordService } = require('../services');

module.exports = {
    passwordCheck: async (hashedPassword, password) => {
        return await passwordService.compare(password, hashedPassword);
    }

};

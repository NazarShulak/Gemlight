const { UserModel } = require('../database');
const bcrypt = require("bcrypt");


module.exports = {
    passwordCheck: async (password, hashedPassword) => {
        return await bcrypt.compare(password, hashedPassword);
    }
};

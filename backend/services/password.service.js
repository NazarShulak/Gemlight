const bcrypt = require('bcrypt');
const { ErrorHandler } = require("../error");
const { responseCodesEnum: { BAD_REQUEST } } = require('../constants');
module.exports = {
    compare: async (hashedPassword, password) => {
        const isPasswordMatched = await bcrypt.compare(password, hashedPassword);

        if (!isPasswordMatched) {
            throw new ErrorHandler(BAD_REQUEST, 'Wrong email or password', 4005);
        }
    },

    hash: (password) => bcrypt.hash(password, 10)
};
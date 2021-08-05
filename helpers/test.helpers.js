const { UserModel } = require('../database');
const bcrypt = require("bcrypt");


module.exports = {
    passwordCheck: async (password, hashedPassword) => {
        return await bcrypt.compare(password, hashedPassword);
    },

    dbValueCheck: async () => {
        const userFromDb = await UserModel.findOne({ where: { email: 'test@test.co' } });

        console.log(userFromDb);
        console.log('****************8');
        console.log(userFromDb.email);
    }
};

const { UserModel } = require('../database');
const bcrypt = require("bcrypt");


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
    }
};

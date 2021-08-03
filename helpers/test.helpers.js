const { UserModel } = require('../database');


module.exports = {
    createFakeUser: async () => {
        const createdUser = await UserModel.create({
            name: 'tst',
            age: 20,
            email: 'tst@tst.co',
            password: 'tst12345'
        });

        console.log(createdUser)
        return { user_id: 2, ...createdUser };
    },

    getFakeUserFromDB: async () => {
        const userFromDB=await UserModel.findOne({ where: { email: 'tst@tst.co' } });
        console.log(userFromDB);

        return userFromDB;
    }


};

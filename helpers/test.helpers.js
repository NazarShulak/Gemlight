const { UserModel } = require('../database');


module.exports = {
    createFakeUser: async () => {
        const createdUser = await UserModel.create({
            name: 'tst',
            age: 20,
            email: 'tst@tst.co',
            password: 'tst12345'
        });

        return { user_id: 2, ...createdUser };
    },

    getFakeUserFromDB: async () => {
        return await UserModel.raw('SELECT * FROM userInfo WHERE email=aaaaa@aaaaa.co');
    }
};

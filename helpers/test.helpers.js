const { UserModel } = require('../database');
const request = require("supertest");
const app = require("../app");


module.exports = {
    createFakeUser: async () => {
        return await request(app).post("/api/users").send({
            name: 'tst',
            age: 20,
            email: 'tst@tst.co',
            password: 'tst12345'
        });
    },

    getFakeUserFromDB: async () => {
        return await UserModel.raw('SELECT * FROM userInfo WHERE email=tst@tst.co');
    }
};

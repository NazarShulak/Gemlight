const { UserModel } = require('../database');
const request = require("supertest");
const app = require("../app");


module.exports = {
    createFakeUser: async () => {
        return await request(app).post("/api/users").send({
            name: 'test',
            age: 20,
            email: 'test@test.co',
            password: 'test12345'
        });
    },

    getFakeUserFromDB: async () => {
        return await UserModel.raw('SELECT * FROM userInfo WHERE email=test@test.co');
    }
};

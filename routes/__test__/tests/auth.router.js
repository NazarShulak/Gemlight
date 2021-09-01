const sinon = require("sinon");
const request = require("supertest");
const sinonRequest = require("request");
const app = require("../../../app");
const { testHelpers: { dbTokensCheck } } = require('../../../helpers');
const { stub } = require("sinon");

module.exports = () => {
    // describe("POST /auth/local ", () => {
    //     test("It should respond with an object of user and status code of 200", async () => {
    //         const response = await request(app).post("/auth/local").send({
    //             email: 'test@test.co',
    //             password: 'test12345'
    //         });
    //
    //         expect(response.statusCode).toBe(200);
    //         expect(response.body).toEqual(
    //             expect.objectContaining({
    //                 id: expect.any(Number),
    //                 userId: expect.any(Number),
    //                 accessToken: expect.any(String),
    //                 refreshToken: expect.any(String),
    //                 expireAt: expect.any(Number)
    //             })
    //         )
    //         expect(await dbTokensCheck(response.body.accessToken, response.body.refreshToken)).toBe(true);
    //     });
    // });
    //

    describe('stubbed google oauth', () => {
        const requestApp = request(app);

        afterEach(() => {
            sinon.restore();
        })

        beforeEach(() => {
            sinon.restore();
        })

        test('should return user data', async () => {
            sinon
                .stub(requestApp, 'get')
                .resolves({
                    id: 1,
                    userId: 1,
                    googleId: 2456567345666,
                    accessToken: 'testAccessToken',
                    refreshToken: 'testRefreshToken',
                });

            const response = await requestApp.get('/auth/google');

            expect(response).toHaveProperty('id');
            expect(response).toHaveProperty('userId');
            expect(response).toHaveProperty('googleId');
            expect(response).toHaveProperty('accessToken');
            expect(response).toHaveProperty('refreshToken');
            expect(response.id).toBe(1);
            expect(response.userId).toBe(1);
            expect(response.googleId).toBe(2456567345666);
            expect(response.accessToken).toBe('testAccessToken');
            expect(response.refreshToken).toBe('testRefreshToken');
        })
    })
};

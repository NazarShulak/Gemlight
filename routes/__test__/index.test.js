const authTest = require('./auth.router');
const productTest = require('./product.router');
const userTest = require('./user.router');


describe('sequentially run tests', () => {
    userTest();
    authTest();
    productTest();
});

const authTest = require('./tests/auth.router');
const productTest = require('./tests/product.router');
const userTest = require('./tests/user.router');


describe('sequentially run tests', () => {
    // userTest();
    // authTest();
    productTest();
});

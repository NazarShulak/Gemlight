const router = require('express').Router();

const { authController: { loginUser } } = require('../controllers');
const {
    authMiddlewares: {
        userBodyCheck,
        checkUserLogin,
        checkUserPasswordValidity,
        checkIfUserLogged
    }
} = require('../middlewares');

router.post('/local', userBodyCheck, checkUserLogin, checkUserPasswordValidity, loginUser);

module.exports = router;

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

/**
 * @swagger
 * /auth/local:
 *     post:
 *         description: Login user
 *         responses:
 *             200:
 *                 description: Success
 */
router.post('/local', userBodyCheck, checkUserLogin, checkUserPasswordValidity, checkIfUserLogged, loginUser);

module.exports = router;

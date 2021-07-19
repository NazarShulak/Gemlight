const router = require('express').Router();

const { authController: { loginUser } } = require('../controllers');

/**
 * @swagger
 * /auth/local:
 *     post:
 *         description: Login user
 *         responses:
 *             200:
 *                 description: Success
 */
router.post('/local', loginUser);

module.exports = router;

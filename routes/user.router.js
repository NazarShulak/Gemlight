const router = require('express').Router();
const { userController: { getUsers, createUsers } } = require('../controllers');
const { userMiddlewares: { checkIfUserRegistered, checkUserForCreation } } = require('../middlewares');

/**
 * @swagger
 * /api/users:
 *     get:
 *         description: Get all users
 *         responses:
 *             200:
 *                 description: Success
 */
router.get('/users', getUsers);

/**
 * @swagger
 * /api/users:
 *     post:
 *         description: Post new user
 *         responses:
 *             200:
 *                 description: Success
 */
router.post('/users', checkIfUserRegistered, checkUserForCreation, createUsers);

module.exports = router;

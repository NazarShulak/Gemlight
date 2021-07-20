const router = require('express').Router();
const { userController: { getUsers, createUsers, deleteUsers } } = require('../controllers');
const { userMiddlewares: { checkIfUserExist, checkUserForCreation } } = require('../middlewares');

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
router.post('/users', checkIfUserExist, checkUserForCreation, createUsers);

/**
 * @swagger
 * /api/users/:user_id:
 *     delete:
 *         description: Delete user
 *         responses:
 *             204:
 *                 description: No content
 */
router.delete('/users/:user_id', deleteUsers);

module.exports = router;

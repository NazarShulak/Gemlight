const router = require('express').Router();
const { userController: { getUsers, createUsers } } = require('../controllers');

/**
 * @swagger
 * /api/users:
 *     get:
 *         description: Get all users
 *         responses:
 *             200:
 *                 description: Success
 */
router.get('/api/users', getUsers);

/**
 * @swagger
 * /api/users:
 *     post:
 *         description: Post new user
 *         responses:
 *             200:
 *                 description: Success
 */
router.post('/api/users', createUsers);

module.exports = router;

const router = require('express').Router();
const { userController: { getUsers } } = require('../controllers');

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

module.exports = router;

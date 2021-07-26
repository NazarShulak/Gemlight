const router = require('express').Router();
const { userController: { getUsers, createUsers, deleteUsers } } = require('../controllers');
const {
    userMiddlewares: { checkIfUserExist, checkUserForCreation },
    authMiddlewares: { checkAccessToken }
} = require('../middlewares');

router.get('/users', getUsers);
router.post('/users', checkIfUserExist, checkUserForCreation, createUsers);
router.delete('/users/:user_id', checkAccessToken, deleteUsers);

module.exports = router;

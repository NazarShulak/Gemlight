const router = require('express').Router();
const { userController: { getUsers, createUsers, deleteUsers, updateUsers } } = require('../controllers');
const {
    userMiddlewares: { checkIfUserExist, checkUserForCreation },
    authMiddlewares: { checkAccessToken, checkIfUserLogged }
} = require('../middlewares');

router.get('/users', getUsers);
router.post('/users', checkIfUserExist, checkUserForCreation, createUsers);
router.put('/users', checkIfUserLogged, updateUsers);
router.delete('/users/:user_id', checkAccessToken, deleteUsers);

module.exports = router;

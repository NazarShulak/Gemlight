const router = require('express').Router();
const { userController: { getUser } } = require('../controllers');

router.get('/api/users/me', getUser);

module.exports = router;

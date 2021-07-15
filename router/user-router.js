const router = require('express').Router();

const {userController: {getUsers}} = require('../controller');

router.get('/users', getUsers);

module.exports = router;

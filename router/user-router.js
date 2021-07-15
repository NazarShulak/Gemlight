const router = require('express').Router();

const {userController: {getUsers}} = require('../controller');

router.get('/', getUsers);

module.exports = router;

const router = require('express').Router();

const { authController: { loginUser } } = require('../controllers');

router.post('/local', loginUser);

module.exports = router;

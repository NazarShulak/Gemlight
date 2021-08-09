const router = require('express').Router();
const passport = require('passport');

const { authController: { loginUser } } = require('../controllers');
const {
    authMiddlewares: {
        userBodyCheck,
        checkUserLogin,
        checkUserPasswordValidity
    }
} = require('../middlewares');

router.post('/local', userBodyCheck, checkUserLogin, checkUserPasswordValidity, loginUser);

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/'
    }
));


module.exports = router;

const router = require('express').Router();
const passport = require('passport');
require('../passports/passport');

const { AuthModel } = require('../database');

const { authController: { loginUser } } = require('../controllers');
const {
    authMiddlewares: {
        userBodyCheck,
        checkUserLogin,
        checkUserPasswordValidity
    }
} = require('../middlewares');


router.post('/local', userBodyCheck, checkUserLogin, checkUserPasswordValidity, loginUser);

router.get('/failed', (req, res) => res.send('You Failed to log in!'))
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
    (req, res) => {
        res.json(req.user);
    }
);

router.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/auth/google');
})

module.exports = router;

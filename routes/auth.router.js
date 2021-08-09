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

router.get('/', (req, res) => res.send('Example Home page!'))
router.get('/failed', (req, res) => res.send('You Failed to log in!'))
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.json('Success');
    }
);

router.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/api/auth/local');
})

module.exports = router;

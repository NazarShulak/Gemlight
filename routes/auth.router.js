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

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
//
//     res.send(req.user);
//     res.redirect('/profile');
// });


module.exports = router;

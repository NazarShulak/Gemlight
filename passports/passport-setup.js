const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { constants: { CLIENT_ID, CLIENT_SECRET } } = require('../constants');


passport.use(
    new GoogleStrategy({

        clientID: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        callbackURL: '/auth/local/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db
        console.log(profile);
    })
);
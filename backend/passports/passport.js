const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { constants: { CLIENT_ID, CLIENT_SECRET } } = require('../constants');
const { AuthModel, UserModel } = require('../database');

const date = new Date();

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(new GoogleStrategy({
        clientID: CLIENT_ID+'',
        clientSecret: CLIENT_SECRET+'',
        callbackURL: 'http://localhost:8000/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
        const userExist = await UserModel.findOne({ where: { email: profile._json.email } });

        if (userExist) {
            const user = await AuthModel.findOrCreate({
                where: { googleId: profile.id },
                defaults: {
                    accessToken,
                    refreshToken,
                    userId: userExist.user_id,
                    googleId: profile.id,
                    expireAt: date.setDate(date.getDate() + 1)
                }
            });

            return done(null, user);
        }

    }
));

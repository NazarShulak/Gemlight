const Sequelize = require('sequelize');
const sequelize = require('../connection');
const UserModel = require('./User.model');

const UserAuth = sequelize.define('Auth', {
    accessToken: {
        type: Sequelize.STRING,
        allowNull: false
    },
    refreshToken: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user: {
        type: Sequelize.STRING,
        allowNullL: false,
        ref: 'userInfo'
    }
}, {
    tableName: 'userAuth',
    timestamps: false
});

UserAuth.hasOne(UserModel);

module.exports = UserAuth;
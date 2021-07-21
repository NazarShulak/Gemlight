const Sequelize = require('sequelize');
const sequelize = require('../connection');
const UserAuth = require('./UserAuth.model');

const UserModel = sequelize.define('User', {

    user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    tableName: 'userInfo',
    timestamps: false
});

UserModel.hasOne(UserAuth);

module.exports = UserModel;

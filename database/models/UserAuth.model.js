const Sequelize = require('sequelize');
const sequelize = require('../connection');

const UserAuth = sequelize.define('Auth', {
    accessToken: {
        type: Sequelize.STRING,
        allowNull: false
    },
    refreshToken: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNullL: false
    }
}, {
    tableName: 'userAuth',
    timestamps: false,
    classMethods: {
        associate: function (models) {
            Comment.belongsTo(models.UserModel, { foreignKey: 'userId' });
        }
    }
});

module.exports = UserAuth;
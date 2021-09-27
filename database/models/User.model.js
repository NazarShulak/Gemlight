const Sequelize = require('sequelize');
const { sequelize } = require('../connection');

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
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        enum: ['Pending', 'Active'],
        default: 'Pending'
    },
    confirmationCode: {
        type: Sequelize.STRING,
        uniq:true
    }
}, {
    tableName: 'userInfo',
    timestamps: false,
    classMethods: {
        associate: function (models) {
            UserModel.hasOne(models.AuthModel, { foreignKey: 'userId' });
            UserModel.hasMany(models.ProductAttributeModel, { as: 'userProducts' });
        }
    }
});

module.exports = UserModel;

const Sequelize = require('sequelize');
const sequelize = require('../connection');

const ProductModel = sequelize.define('Product', {
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'products',
    timestamps: false,
    classMethods: {
        associate: function (models) {
            ProductModel.belongsTo(models.UserModel, { foreignKey: 'userId' })
        }
    }
});


module.exports = ProductModel;

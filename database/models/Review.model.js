const Sequelize = require('sequelize');
const { sequelize } = require('../connection');

const ReviewModel = sequelize.define('Review', {
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    reviewBody: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    tableName: 'reviews',
    timestamps: false,
    classMethods: {
        associate: function (models) {
            ReviewModel.belongsTo(models.ProductModel, { foreignKey: 'productId' })
        }
    }
});

module.exports = ReviewModel;

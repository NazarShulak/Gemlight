const Sequelize = require('sequelize');
const { sequelize } = require('../connection');

const ProductAttributeValuesModel = sequelize.define('ProductAttributeValues', {
    attributeId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    attributeName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    attributeValue: {
        type: Sequelize.STRING,
        allowNull: false
    }

}, {
    tableName: 'productAttributeValues',
    timestamps: false,
    classMethods: {
        associate: function (models) {
            ProductAttributeValuesModel.belongsToMany(models.ProductModel, {
                through: models.ProductAttributeModel,
                foreignKey: 'attributeId',
                otherKey:'productId',
                as:'products'
            });

        }
    }
});


module.exports = ProductAttributeValuesModel;

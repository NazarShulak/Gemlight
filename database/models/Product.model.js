const Sequelize = require('sequelize');
const { sequelize } = require('../connection');

const ProductAttributesModel = sequelize.define('ProductAttributes', {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    attributeId: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
    tableName: 'productAttributes',
    timestamps: false,
    classMethods: {
        associate: function (models) {
            ProductAttributesModel.belongsTo(models.UserModel, { foreignKey: 'userId' })

            ProductAttributesModel.belongsToMany(models.ProductAttributeValuesModel, {
                as:'ProductAttributeValues',
                through: {
                    model: models.ProductAttributeModel,
                    unique: false
                }
            })
        }
    }
});


module.exports = ProductAttributesModel;

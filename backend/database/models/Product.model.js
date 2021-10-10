const Sequelize = require('sequelize');
const { sequelize } = require('../connection');

const ProductModel = sequelize.define('Products', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
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
    tableName: 'products',
    timestamps: false,
    classMethods: {
        associate: function (models) {
            ProductModel.belongsTo(models.UserModel, { foreignKey: 'userId' });

            ProductModel.belongsToMany(models.ProductAttributeValuesModel, {
                through: models.ProductAttributeModel,
                foreignKey: 'productId',
                otherKey:'attributeId',
                as:'productAttributeValues'
            });
        }
    }
});


module.exports = ProductModel;

const { sequelize } = require('../connection');
const { Sequelize } = require("sequelize");

const ProductAttributeModel = sequelize.define('Product_Attribute', {
    productId: {
        type: Sequelize.INTEGER,
    },
    attributeId: {
        type: Sequelize.INTEGER
    }

}, {
    timestamps: false,
    classMethods: {
        associate:function (models) {
            
        }
    }});

module.exports = ProductAttributeModel;

const Joi = require('joi');

module.exports = {
    checkProductForCreation: Joi.object().keys({
        productId: Joi.number().required(),
        userId: Joi.number().required(),
        title: Joi.string().required(),
        description: Joi.string(),
        price: Joi.number().required(),
        quantity: Joi.number().required()
    })
};

const Joi = require('joi');

module.exports = {
    checkProductForCreation: Joi.object().keys({
        productId: Joi.number().required(),
        userId: Joi.number().required(),
        title: Joi.string().required(),
        description: Joi.object(),
        price: Joi.number().required(),
        quantity: Joi.number().required()
    }),

    reviewBodyCheck: Joi.object().keys({
        userId: Joi.number().required(),
        reviewBody: Joi.string().required()
    })
};

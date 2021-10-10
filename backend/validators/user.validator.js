const Joi = require('joi');

const { constants: { EMAIL_REGEXP } } = require('../constants');

module.exports = {
    createUser: Joi.object().keys({
        name: Joi.string()
            .required()
            .min(3)
            .max(35),
        email: Joi.string()
            .required()
            .regex(EMAIL_REGEXP),
        password: Joi.string()
            .required()
            .min(5)
            .max(25)
    })
};

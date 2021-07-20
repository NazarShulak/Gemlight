const Joi = require('joi');
const { constants: { EMAIL_REGEXP } } = require("../constants");

module.exports = {
    checkUserLoginBody: Joi.object().keys({
        email: Joi.string()
            .required()
            .regex(EMAIL_REGEXP),
        password: Joi.string()
            .required()
            .min(5)
            .max(25)
    })
};

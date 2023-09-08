const Joi = require('joi');

module.exports = Joi.object({
    code: Joi.number()
        .integer()
        .min(1)
        .max(9999),

    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    cost_price: Joi.number()
        .min(1)
        .max(9999),

    sales_price: Joi.number()
        .min(1)
        .max(9999),
});
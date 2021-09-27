const { responseCodesEnum: { CONFLICT, BAD_REQUEST } } = require('../constants');
const { ErrorHandler } = require('../error');
const {  ProductModel } = require('../database');
const { productValidators: { checkProductForCreation, reviewBodyCheck } } = require('../validators');

module.exports = {
    checkInputFields: async (req, res, next) => {
        try {
            const { error } = checkProductForCreation.validate(req.body);

            if (error) {
                throw new ErrorHandler(BAD_REQUEST, 'Bad input data!', 4002);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    checkUniqueProductId: async (req, res, next) => {
        try {
            const { productId } = req.body;
            const product = await ProductModel.findOne({ where: { productId } });

            if (product) {
                throw new ErrorHandler(CONFLICT, 'ProductId is not unique!', 4091);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    productExistenceCheck: async (req, res, next) => {
        try {
            const { id } = req.params;

            const product = await ProductModel.findOne({ where: { productId: id } });

            if (!product) {
                throw  new ErrorHandler(BAD_REQUEST, 'No such product', 4003);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    reviewBodyCheck: async (req, res, next) => {
        try {
            const { error } = reviewBodyCheck.validate(req.body);

            if (error) {
                throw new ErrorHandler(BAD_REQUEST, 'Bad input data!', 4004);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};

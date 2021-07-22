const { productValidators: { checkProductForCreation } } = require('../validators');
const { ProductModel } = require('../database');

module.exports = {
    checkInputFields: async (req, res, next) => {
        try {
            const { error } = checkProductForCreation.validate(req.body);

            if (error) {
                throw new Error('Bad input data!');
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
                throw new Error('ProductId is not unique!');
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    productExistingCheck: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { productId } = req.body;

            const product = await ProductModel.findOne({ where: { productId: id } });

            if (!product && id !== productId) {
                throw  new Error('No such product');
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};

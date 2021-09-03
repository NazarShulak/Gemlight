const { ProductModel, ReviewModel } = require('../database');
const { responseCodesEnum: { CREATED, UPDATED, NO_CONTENT } } = require('../constants');

const { productService: { finalFieldsOrder } } = require('../services');

module.exports = {
    getProductById: async (req, res, next) => {
        try {
            const { id } = req.params;
            let product = await ProductModel.findOne({ where: { productId: id } });

            if (!product) {
                throw new Error('No such product');
            }

            product = finalFieldsOrder(product, req.body.fieldsOrder);
            product = { ...product, description: JSON.parse(product.description) };

            res.json(product);
        } catch (e) {
            next(e);
        }
    },

    getAllProducts: async (req, res, next) => {
        try {
            const searchParams = req.body.searchParams;

            let products = await ProductModel.findAll({ where: { ...searchParams } });

            products = products.map(product => finalFieldsOrder(product, req.body.fieldsOrder));
            products = products.map(product => product = { ...product, description: JSON.parse(product.description) });

            res.json(products);
        } catch (e) {
            next(e);
        }
    },

    uniqueNameCheck: async (req, res, next) => {
        try {
            const { name } = req.params;

            const product = await ProductModel.findOne({ where: { title: name } });

            if (product) {
                res.json('not unique');
            }

            res.json('Unique');
        } catch (e) {
            next(e);
        }
    },

    deleteAllProducts: async (req, res, next) => {
        try {
            const { userId } = req.body;
            await ProductModel.destroy({ where: { userId } });

            res.status(NO_CONTENT).json('Successfully deleted');
        } catch (e) {
            next(e);
        }
    },

    addNewProduct: async (req, res, next) => {
        try {
            const { description, ...product } = req.body;
            const createdProduct = await ProductModel.create({ ...product, description: JSON.stringify(description) });

            res.status(CREATED).json(createdProduct);
        } catch (e) {
            next(e);
        }
    },

    updateProduct: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { updatedProduct } = req.body;

            await ProductModel.update({ ...updatedProduct, productId: id }, { where: { productId: id } });

            res.status(UPDATED).json('updated');
        } catch (e) {
            next(e);
        }
    },

    createProductReview: async (req, res, next) => {
        try {
            const { ...review } = req.body;

            const reviewObject = await ReviewModel.create({ ...review, productId: req.params.id });

            res.status(CREATED).json(reviewObject);
        } catch (e) {
            next(e);
        }
    },

    getAllProductReviews: async (req, res, next) => {
        try {
            const { id } = req.params;

            const reviews = await ReviewModel.findAll({ where: { productId: id } });

            res.json(reviews);
        } catch (e) {
            next(e);
        }
    }
};

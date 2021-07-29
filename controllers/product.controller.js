const { ProductModel, ReviewModel } = require('../database');


module.exports = {
    getProductById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await ProductModel.findOne({ where: { productId: id } });

            if (!product) {
                throw new Error('No such product');
            }

            res.json(product);
        } catch (e) {
            next(e);
        }
    },

    getAllProducts: async (req, res, next) => {
        try {
            const { ...searchParams } = req.body;

            const products = await ProductModel.findAll({ where: { ...searchParams } });

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
            const { user_id } = req.body;
            await ProductModel.destroy({ where: { userId: user_id } });

            res.status(204).json('Successfully deleted');
        } catch (e) {
            next(e);
        }
    },

    addNewProduct: async (req, res, next) => {
        try {
            const { ...product } = req.body;
            const createdProduct = await ProductModel.create({ ...product });

            res.status(201).json(createdProduct);
        } catch (e) {
            next(e);
        }
    },

    updateProduct: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { updatedProduct } = req.body;

            await ProductModel.update({ ...updatedProduct }, { where: { productId: id } });

            res.json('updated');
        } catch (e) {
            next(e);
        }
    },

    createProductReview: async (req, res, next) => {
        try {
            const { ...review } = req.body;

            const reviewObject = await ReviewModel.create({ ...review, productId: req.params.id });

            res.json(reviewObject);
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

const {QueryTypes} = require('sequelize');
const {
    ProductModel,
    ReviewModel,
    ProductAttributeValuesModel
} = require('../database');
const {responseCodesEnum: {CREATED, UPDATED, NO_CONTENT}} = require('../constants');

const {productService: {finalFieldsOrder}} = require('../services');
const {sequelize} = require("../database/connection");

module.exports = {
    getProductById: async (req, res, next) => {
        try {
            const {id} = req.params;

            const product = await ProductModel.findOne({where: {productId: id}});
            const productAttributeValues = await ProductAttributeValuesModel.findAll({where: {attributeId: product.attributeId}})

            if (!product) {
                throw new Error('No such product');
            }

            const final = {
                ...product.dataValues,
                ...productAttributeValues[0].dataValues
            }
            res.json({...final});
        } catch (e) {
            next(e);
        }
    },

    getAllProducts: async (req, res, next) => {
        try {
            let products = await sequelize.query(
                `SELECT pr."productId", pr."userId",
                (COALESCE((select json_agg(json_build_object(
                'attributeId', pa."attributeId", 'attributeName', pav."attributeName", 'attributeValue', pav."attributeValue"))
                from "ProductAttributes" as pa
                LEFT JOIN "productAttributeValues" as pav ON pa."attributeId" = pav."attributeId"
                where pa."productId" = pr."productId"), '[]')) as attributes
                FROM products as pr`
            )

            res.json(products);
        } catch (e) {
            next(e);
        }
    },

    uniqueNameCheck: async (req, res, next) => {
        try {
            const {name} = req.params;

            const product = await ProductModel.findOne({where: {title: name}});

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
            const {userId} = req.body;
            await ProductModel.destroy({where: {userId}});

            res.status(NO_CONTENT).json('Successfully deleted');
        } catch (e) {
            next(e);
        }
    },

    addNewProductAttribute: async (req, res, next) => {
        let transaction;

        try {
            const {attributeValue, attributeName, productId, attributeId, userId} = req.body;

            transaction = await sequelize.transaction();
            await sequelize.query(
                `INSERT INTO products ("userId","productId","attributeId") VALUES (?,?,?)`, {
                    replacements: [userId, productId, attributeId],
                    type: QueryTypes.INSERT,
                    transaction
                }
            );

            await sequelize.query(
                'INSERT INTO "productAttributeValues" ("attributeId", "attributeName", "attributeValue") VALUES (?,?,?)', {
                    replacements: [attributeId, attributeName, attributeValue],
                    type: QueryTypes.INSERT,
                    transaction
                }
            );

            await sequelize.query(
                'INSERT INTO "ProductAttributes"("productId", "attributeId") VALUES (?,?)', {
                    replacements: [productId, attributeId],
                    type: QueryTypes.INSERT,
                    transaction
                }
            );

            await transaction.commit();

            res.status(CREATED).json("createdProduct");
        } catch (e) {
            if (transaction) await transaction.rollback();
            next(e);
        }
    },

    updateProduct: async (req, res, next) => {
        try {
            const {id} = req.params;
            const {updatedProduct} = req.body;

            await sequelize.query(
                ''
            );


            res.status(UPDATED).json('updated');
        } catch (e) {
            next(e);
        }
    },

    createProductReview: async (req, res, next) => {
        try {
            const {...review} = req.body;

            const reviewObject = await ReviewModel.create({...review, productId: req.params.id});

            res.status(CREATED).json(reviewObject);
        } catch (e) {
            next(e);
        }
    },

    getAllProductReviews: async (req, res, next) => {
        try {
            const {id} = req.params;

            const reviews = await ReviewModel.findAll({where: {productId: id}});

            res.json(reviews);
        } catch (e) {
            next(e);
        }
    }
};

const router = require('express').Router();

const {
    productController: {
        getProductById,
        uniqueNameCheck,
        deleteAllProducts,
        addNewProductAttribute,
        updateProduct,
        getAllProducts,
        createProductReview,
        getAllProductReviews,
    }
} = require('../controllers');
const {
    productMiddlewares: { checkInputFields, checkUniqueProductId, productExistenceCheck, reviewBodyCheck },
    userMiddlewares: { checkIfUserExistById }
} = require('../middlewares');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.get('/:id/review', productExistenceCheck, getAllProductReviews);
router.post('/:id/review', productExistenceCheck, reviewBodyCheck, checkIfUserExistById, createProductReview);
router.get('/check/:name', uniqueNameCheck);
router.post('/',  checkUniqueProductId, addNewProductAttribute);
router.put('/:id', checkIfUserExistById, productExistenceCheck, checkInputFields, updateProduct);
router.delete('/', deleteAllProducts);

module.exports = router;

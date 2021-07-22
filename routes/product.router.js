const router = require('express').Router();

const {
    productController: {
        getProductById,
        uniqueNameCheck,
        deleteAllProducts,
        addNewProduct,
        updateProduct,
        getAllProducts
    }
} = require('../controllers');
const {
    productMiddlewares: { checkInputFields, checkUniqueProductId, productExistingCheck },
    userMiddlewares: { checkIfUserExistById }
} = require('../middlewares');

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.get('/:id/review');
router.post('/:id/review');
router.get('/check/:name', uniqueNameCheck);
router.post('/', checkIfUserExistById, checkUniqueProductId, checkInputFields, addNewProduct);
router.put('/:id', checkIfUserExistById, productExistingCheck, checkInputFields, updateProduct);
router.delete('/', deleteAllProducts);

module.exports = router;

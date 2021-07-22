const router = require('express').Router();

const {
    productController: {
        getProductById,
        uniqueNameCheck,
        deleteAllProducts,
        addNewProduct,
        updateProduct
    }
} = require('../controllers');
const { productMiddlewares: { check } } = require('../middlewares');

router.get('/check/:name', check, uniqueNameCheck);
router.get('/:id', check, getProductById);
router.put('/:id', check, updateProduct);
router.post('/', check, addNewProduct);
router.delete('/', check, deleteAllProducts);

module.exports = router;

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
const { productMiddlewares: { checkInputFields } } = require('../middlewares');

router.get('/',  getAllProducts);
router.get('/:id', getProductById);
router.get('/check/:name', uniqueNameCheck);
router.post('/', checkInputFields, addNewProduct);
router.put('/:id', checkInputFields, updateProduct);
router.delete('/',  deleteAllProducts);

module.exports = router;

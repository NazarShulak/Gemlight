const { productValidators: { checkProductForCreation } } = require('../validators');

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
    }
};

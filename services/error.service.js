const { responseCodesEnum: { INTERNAL_ERROR } } = require('../constants');


module.exports = {
    _handleErrors: (err, req, res, next) => {
        res.status(err.status || INTERNAL_ERROR).json({
            message: err.message || 'UNKNOWN_ERROR',
            customCode: err.customCode || 0
        });
    }
};

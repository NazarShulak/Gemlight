module.exports = {
    _handleErrors: (err, req, res, next) => {
        res.status(err.status || 500).json({
            message: err.message || 'UNKNOWN_ERROR',
            customCode: err.customCode || 0
        });
    }
};

module.exports = {
    PORT: process.env.PORT || 8000,
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING || '',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    EMAIL_REGEXP: new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')
}
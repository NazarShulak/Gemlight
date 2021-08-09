module.exports = {
    PORT: process.env.PORT || 8000,
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING || '',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_NAME: process.env.DB_NAME || '',
    DB_USER: process.env.DB_USER || '',
    EMAIL_REGEXP: new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$'),
    WRONG_TOKEN: 'Wrong token',
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    REFRESH_TOKEN: process.env.REFRESH_TOKEN,
    ACCESS_TOKEN_LIFETIME: '1d',
    REFRESH_TOKEN_LIFETIME: '30d',
    ACCESS: 'access',
    REFRESH: 'refresh',
    AUTHORIZATION: 'Authorization',
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET
}
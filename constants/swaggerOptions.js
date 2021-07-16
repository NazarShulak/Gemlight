module.exports = {
    swaggerDefinition: {
        info: {
            title: 'API users',
            description: 'API Information',
            version: '1.0.0'
        },

        servers: [{
            url: 'http://localhost:8000',
            description: 'Local'
        }]
    },

    apis: ['./routes/*.js']
};

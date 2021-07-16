const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const { userRouter } = require('./routes');
const { constants } = require('./constants');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'API users',
            description: 'API Information',
        },

        servers: ['http://localhost:8000']
    },

    apis: ['.routes/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api/docs/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/', userRouter);

app.listen(constants.PORT, () => {
    console.log('app listen 8000');
});

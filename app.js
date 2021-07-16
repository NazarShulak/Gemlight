const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const { constants: { PORT }, swaggerOptions } = require('./constants');
const { userRouter } = require('./routes');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/', userRouter);

app.listen(PORT, () => {
    console.log(`app listen on ${PORT}`);
});

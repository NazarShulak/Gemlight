require('dotenv').config();
const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

require('./database/connection');
const sequelize = require("./database/connection");

const { constants: { PORT }, swaggerOptions } = require('./constants');
const { userRouter, authRouter, productRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/auth', authRouter);
app.use('/api', userRouter);
app.use('/api/product', productRouter);

(async () => {
    try {
        await sequelize.sync();

        app.listen(PORT, () => {
            console.log(`App listen ${PORT}`);
        });
    } catch (e) {
        console.log(e)
    }
})();

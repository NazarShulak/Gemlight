require('dotenv').config();
const express = require('express');

const swaggerUi = require('swagger-ui-express');
const docs = require('./docs');

require('./database/connection');
const sequelize = require("./database/connection");

const { constants: { PORT } } = require('./constants');
const { userRouter, authRouter, productRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));
app.use('/auth', authRouter);
app.use('/api', userRouter);
app.use('/api/product', productRouter);

(async () => {
    try {
        // { force: true }
        await sequelize.sync();

        app.listen(PORT, () => {
            console.log(`App listen ${PORT}`);
        });
    } catch (e) {
        console.log(e)
    }
})();

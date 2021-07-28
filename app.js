require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');


const docs = require('./docs/swagger.json');

require('./database/connection');
const { sequelize } = require("./database/connection");

const { constants: { PORT } } = require('./constants');
const { cronRun } = require('./cron-jobs');
const { userRouter, authRouter, productRouter } = require('./routes');
const { errorService: { _handleErrors } } = require('./services');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/api', userRouter);
app.use('/api/product', productRouter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));
app.use(_handleErrors);

(async () => {
    try {
        await sequelize.sync({ force: true });

        app.listen(PORT, () => {
            console.log(`App listen ${PORT}`);
        });

        cronRun();
    } catch (e) {
        console.log(e)
    }
})();


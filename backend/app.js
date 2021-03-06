require('dotenv').config();
const cookieSession=require('cookie-session');
const express = require('express');
const passport=require('passport');
const swaggerUi = require('swagger-ui-express');

const docs = require('./docs/swagger.json');
require('./database/connection');

const { userRouter, authRouter, productRouter } = require('./routes');
const { errorService: { _handleErrors } } = require('./services');


const app = express();

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}))


app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);
app.use('/api', userRouter);
app.use('/api/product', productRouter);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs));
app.use(_handleErrors);

module.exports = app;

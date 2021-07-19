const express = require('express');
const mysql = require('mysql2');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const { constants: { PORT }, swaggerOptions } = require('./constants');
const { userRouter, authRouter } = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/', userRouter);
app.use('/auth', authRouter);


const connection = mysql.createConnection({
    port: 3306,
    host: process.env.DB_CONNECTION_STRING,
    user: 'admin',
    password: process.env.DB_PASSWORD,
    database: 'users'
});


app.listen(PORT, () => {
    console.log(`app listen on ${PORT}`);

    connection.connect(err => {
        if (err) return console.log(err);
        console.log('connection is successfully established');
    });

});

module.exports.connection = connection;

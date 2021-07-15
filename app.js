const express = require('express');

const {userRouter} = require('./router');
const {constants} = require('./constants');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', userRouter);

app.listen(constants.PORT, () => {
    console.log('app listen 8000');
});
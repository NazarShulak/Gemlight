const express = require('express');

const {userRouter} = require('./router');
const {constants} = require('./constants');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.get('https://dev.api.cloud.picupmedia.com/docs#/User/get_api_users_me', (req, res) => {
//     res.json('Welcome');
// })

app.get('/', (req, res) => {
    res.json('Welcome');
})

app.listen(process.env.PORT || constants.PORT, () => {
    console.log('app listen 8000');
});
require('dotenv/config')
const express= require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());
app.use('/', require('./route/postsRoute'));

app.listen(3000);
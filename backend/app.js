const express = require('express');
const cors = require('cors');
const userRoute = require('./src/routers/userRouter')

const app = express();

app.use(cors()); 
app.use(express.json());
app.use('/users', userRoute)

module.exports = app;
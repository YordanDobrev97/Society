const express = require('express');
require('dotenv').config();
require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000;
const { userRoute } = require('./routes/index');

app.use('/users', userRoute);

app.listen(PORT, console.log(`Server is running at ${PORT}`));
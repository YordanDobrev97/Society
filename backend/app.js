const express = require('express');
require('dotenv').config();
require('./config/db');
const User = require('./models/User');
const app = express();
const PORT = 5000;

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.send(users);
})


app.listen(PORT, console.log(`Server is running at ${PORT}`));
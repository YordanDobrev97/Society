const express = require('express');
const router = express.Router();
const usersService = require('../services/users');

router.get('/', async (req, res) => {
    const users = await usersService.getAll();
    res.json(users);
})

module.exports = router;
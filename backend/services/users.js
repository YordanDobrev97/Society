const User = require('../models/User');

const getAll = async () => {
    const users = await User.findAll();
    return users;
}

module.exports = {
    getAll,
}
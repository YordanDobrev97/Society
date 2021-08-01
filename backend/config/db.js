const { Sequelize } = require('sequelize');
const connectionString = process.env.CONNECTION_STRING || '';

const sequelize = new Sequelize(connectionString, {
    dialect: 'postgres',
    host: 'localhost'
});


module.exports = sequelize;
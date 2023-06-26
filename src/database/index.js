const Sequelize = require('sequelize');
const DbConfig = require('../config_database/database');

const ReviewUser = require ('./models/Review')
const TableUser = require('./models/Users');

//Connect  DB
const connection = new Sequelize(DbConfig);

TableUser.init(connection);
ReviewUser.init(connection);
module.exports = connection;
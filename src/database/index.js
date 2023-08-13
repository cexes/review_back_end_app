const Sequelize = require('sequelize');
const DbConfig = require('../config_database/database');
const MoviesTable = require('./models/MoviesTable');
const ReviewUser = require ('./models/Review');
const TableUser = require('./models/Users');

//Connect  DB
const connection = new Sequelize(DbConfig);
MoviesTable.init(connection)
TableUser.init(connection);
ReviewUser.init(connection);
module.exports = connection;
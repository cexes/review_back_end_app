const { Model, DataTypes} = require ('sequelize');
const { sequelize } = require('./Users');

class MoviesTables extends Model{
     static init(sequelize){
        super.init({
            name_movie: DataTypes.STRING,
            category: DataTypes.STRING,
            sinopse: DataTypes.STRING,
        },{
            sequelize
        })
     }
}

module.exports = MoviesTables;
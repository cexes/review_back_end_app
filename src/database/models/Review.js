const {Model, DataTypes} = require('sequelize');

class ReviewUser extends Model {
     static init(sequelize) {
        super.init({
           review: DataTypes.STRING,
           note: DataTypes.INTEGER,
           category: DataTypes.STRING
        },{
         sequelize
        })
     }
}

module.exports = ReviewUser
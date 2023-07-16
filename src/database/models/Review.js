const {Model, DataTypes} = require('sequelize');

class ReviewUser extends Model {
     static init(sequelize) {
        super.init({
         user_id: DataTypes.INTEGER,
         review: DataTypes.STRING,
         note: DataTypes.INTEGER,
         category:DataTypes.STRING,
         created_at: DataTypes.DATE,
         updated_at: DataTypes.DATE,
        },{
         sequelize
        })
     }
}

module.exports = ReviewUser
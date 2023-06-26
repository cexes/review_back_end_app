const { Model, DataTypes } = require('sequelize');

class Users extends Model {
   static init(sequelize){
      super.init({
         name: DataTypes.STRING,
         email: DataTypes.STRING,
         pass: DataTypes.STRING,
         created_at: DataTypes.NOW,
         updated_at: DataTypes.NOW

      },{
        sequelize
      })
   }
}

module.exports = Users;

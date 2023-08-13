'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('moviesCollection', {
      id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true
      },
     name_movie: {
         type:Sequelize.STRING,
         allowNull:false
     },
     category: {
       type: Sequelize.STRING,
       allowNull: false
  
      } ,
      sinopse:{
       type: Sequelize.STRING,
       allowNull: false,
     }
    });
 

},
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('moviesCollection');
  }
};

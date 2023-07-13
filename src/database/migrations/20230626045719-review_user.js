'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('review_users', {
        id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
        },
        user_id: {
         type: Sequelize.INTEGER,
         allowNull:false,
         references: {model: 'users', key: 'id'},
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE',
         
       } ,
       review: {
         type: Sequelize.STRING,
         allowNull:false  
       },
       note: {
         type: Sequelize.INTEGER,
         allowNull:false
       },   
       category: {
         type: Sequelize.STRING,
         allowNull: false
       } ,
       created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      });
   

  },

  async down (queryInterface, Sequelize) {
       await queryInterface.dropTable('review_users');
     
  }
};

const  UsersController = require('../controllers/UsersControllers');
const ReviewUserController = require('../controllers/ReviewUserController');
// <--- Router Config --->
const express = require('express');
const routes = express.Router()

routes.post('/register_user',UsersController.InsertUser);
routes.post('/new_review', ReviewUserController.InserNewReview);

routes.get('/',(req,res)=>{
    console.log("Cheguei aqui")
})
module.exports = routes;

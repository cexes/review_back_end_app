const  LoginController = require('../controllers/LoginController');
const ReviewUserController = require('../controllers/ReviewUserController');
const sessionMiddleware = require('../middlewares/Session');

// <--- Router Config --->

const express = require('express');
const routes = express.Router()

// Routes Posts
routes.post('/login',sessionMiddleware,LoginController.FindUser)

// Routes Get

routes.get('/debug', sessionMiddleware,(req,res) => {
    console.log(req.session.email,req.session.pass)
    res.json({'SESSION':true})
});

routes.get('/logout', sessionMiddleware,(req,res)=>{ 
    req.session.destroy();
    res.json({'SESSION':false})
});

routes.get('/showReviews', ReviewUserController.ReturnViews)

module.exports = routes;
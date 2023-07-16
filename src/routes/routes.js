const  LoginController = require('../controllers/LoginController');
const ReviewUserController = require('../controllers/ReviewUserController');
const sessionMiddleware = require('../middlewares/Session');

// <--- Router Config --->

const express = require('express');
const routes = express.Router()

// Routes Posts

routes.post('/registerNewUser', sessionMiddleware, LoginController.InsertUser);

routes.post('/login',sessionMiddleware,LoginController.FindUser)

// Routes Get

routes.get('/debug', sessionMiddleware,(req,res) => {
     if(req.session.email && req.session.pass) {
        return res.json({
            'EMAIL': req.session.email,
            'PASS': req.session.pass,
             'ID': req.session.ident
        })
     }else {
        return res.json({'SESSION':false})
     }
});

routes.get('/logout', sessionMiddleware,(req,res)=>{ 
    req.session.destroy();
    res.json({'SESSION':false})
});

routes.post('/createReview',sessionMiddleware, ReviewUserController.InserNewReview)

module.exports = routes;

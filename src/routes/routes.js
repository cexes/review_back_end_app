const session = require('express-session');
const  UsersController = require('../controllers/UsersControllers');
const ReviewUserController = require('../controllers/ReviewUserController');

// <--- Router Config --->

const express = require('express');
const routes = express.Router()

// Routes Posts

routes.post('/register_user',UsersController.InsertUser);
routes.post('/new_review', ReviewUserController.InserNewReview);

// Routes Get

routes.get('/show_user', UsersController.FindUser)

routes.get('/',(req,res)=>{
    console.log("Cheguei aqui")
});

// Session

routes.use(session({
    secret:'teste',
}));

routes.post('/set_session',(req,res) => { 
    req.session.name = req.body.name;
    console.log(req.session.name)
    res.json("ENVIADO")
});

routes.get('/get_session',(req,res) => { 
     console.log( req.session.name) 
});


module.exports = routes;

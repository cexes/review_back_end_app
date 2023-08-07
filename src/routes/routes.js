const  LoginController = require('../controllers/LoginController');
const ReviewUserController = require('../controllers/ReviewUserController');
const sessionMiddleware = require('../middlewares/Session');

// <--- Router Config --->

const express = require('express');
const routes = express.Router()
routes.use(sessionMiddleware)
// Routes Posts

routes.post('/registerNewUser', LoginController.InsertUser);
routes.post('/createReview',ReviewUserController.InserNewReview);
routes.post('/login',LoginController.FindUser)

// Routes Get
routes.get('/reviews',ReviewUserController.ReturnReviews)
routes.get('/debug',(req,res) => {
        return res.json({
            'EMAIL': req.session.email,
            'NAME': req.session.name,
             'ID': req.session.ident

})});

routes.get('/logout',(req,res)=>{ 
    req.session.destroy();
    res.json({'SESSION':false})
});


module.exports = routes;

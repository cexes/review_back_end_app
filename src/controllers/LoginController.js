const User = require('../database/models/Users');
const session = require('../middlewares/Session');


module.exports = {
   async InsertUser(req,res) {
      const {name,email,pass} = req.body;
      const user = await User.create({name,email,pass});
      return res.json(user);
    },

    async FindUser(req, res) {
      const query = await User.findAll({
         attributes:['email','pass'],
         where:{email: req.body.email,pass:req.body.pass }
      });
     if(query.length === 0) {
        return res.status(400).json({
            erro:true,
            mensage: "USER NOT FOUND"
        });
     } 
      const { email, pass } = query[0].dataValues;
      
      req.session.email= email
      req.session.pass = pass
    
      return res.json({ success: true });

    },
    };

   
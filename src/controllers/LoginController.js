const User = require('../database/models/Users');



module.exports = {
   async InsertUser(req,res) {
       const date = Date()
  try {
      const {name,email,pass} = req.body;
      const user = await User.create({name,email,pass,date,date});
      req.session.email = email;
      req.session.pass = pass;
      req.session.ident = user.id
      return res.json(user);
      }catch(err){ return res.json(err) };
  },

    async FindUser(req, res) {
      const query = await User.findAll({
         attributes:['id','email','name','pass'],
         where:{email: req.body.email,pass:req.body.pass }
      });
     if(query.length === 0) {
        return res.status(400).json({
            erro:true,
            mensage: "USER NOT FOUND"
        });
     } 
      const { id, email,name, pass } = query[0].dataValues;
      
      req.session.ident = id;
      req.session.email= email;
      req.session.name = name;

      return res.json({ success: true });

    },
    };

   

const User = require('../database/models/Users');

module.exports = {
   async InsertUser(req,res) {
      const {name,email,pass} = req.body;
      const user = await User.create({name,email,pass});
      return res.json(user);
    },

    async FindUser(req, res) {
      const query = await User.findAll({
         attributes:['id','name','pass'],
         where:{email: req.body.email }
      });
     if(query.length === 0) {
        return res.status(400).json({
            erro:true,
            mensage: "USER NOT FOUND"
        });
     } 
      return res.json(query)
         
      }
    };
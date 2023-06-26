const User = require('../database/models/Users');

module.exports = {
   async InsertUser(req,res) {
      const {name,email,pass} = req.body;
      const user = await User.create({name,email,pass});
      return res.json(user);
    } 

};
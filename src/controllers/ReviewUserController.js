const ReviewUser  = require('../database/models/Review');


module.exports = {
  async InserNewReview(req,res) {
    const date = Date()
    const user_id = req.session.ident
    console.log(user_id)
    const {review,note,category} = req.body;
    try{
      const rev = await ReviewUser.create({user_id,review,note,category,date,date})
      return res.json(rev);
  }catch(err) {  return res.json(err) }
  },

}



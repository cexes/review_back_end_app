const Review = require('../database/models/Review');

module.exports = {
  async InserNewReview(req,res) {
    const {review,note,category} = req.body;
    const rev = await Review.create({review,note,category});
    return res.json(rev);
  }
}
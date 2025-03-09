import Rating from "../models/rating.js";
import Article from "../models/article.js";
export async function addRating(req, res) {
  try {
    const { articleId, rate } = req.body;
    console.log(articleId, rate);
    if (rate < 1 || rate > 5) {
      return res.status(400).json({ message: "امتیاز باید بین ۱ تا ۵ باشد" });
    }

    const existingRating = await Rating.findOne({
      articleId,
      userId: req.user._id,
    });
    if (existingRating) {
      await Rating.findOneAndUpdate({ articleId }, { rating: rate });
    } else {
      await Rating.create({ articleId, userId: req.user._id, rating: rate });
    }

    const ratings = await Rating.find({ articleId });
    const totalRatings = ratings.length;
    const averageRating =
      ratings.reduce((sum, curr) => sum + curr.rating, 0) / totalRatings;

    await Article.findByIdAndUpdate(articleId, {
      averageRating: averageRating.toFixed(1),
      ratingsCount: totalRatings,
    });

    res.json({ message: "امتیاز شما ثبت شد", averageRating, totalRatings });
  } catch (error) {
    res.status(500).json({ message: "خطای سرور", error });
  }
}

export async function getArticleRating(req, res) {
  try {
    const { id } = req.params;
    const article = await Article.findOne({ _id: id });

    if (!article) {
      return res.status(404).json({ message: "مقاله یافت نشد" });
    }

    res.json({
      averageRating: article.averageRating,
      ratingsCount: article.ratingsCount,
    });
  } catch (error) {
    res.status(500).json({ message: "خطای سرور", error });
  }
}

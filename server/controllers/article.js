import Article from "../models/article.js";
import User from "../models/users.js";
//////////////////////
export async function getAllArticle(req, res) {
  const articles = await Article.find({})
    .populate("author", "email userName")
    .sort({ createdAt: -1 });
  res.json({ message: "ok", data: articles });
}
export async function getArticle(req, res) {
  const { id } = req.params;
  const article = await Article.findOne({ _id: id });
  res.json({ message: "ok", data: article });
}
export async function updateArticle(req, res) {
  const { id } = req.params;
  const { title, content, image } = req.body;
  const update = { title, content, image };
  const article = await Article.findOne({ _id: id });
  if (!article) {
    return res.status(400).json({ message: "Article Not Found", data: null });
  }
  const isDataChanged =
    (title && article.title !== title) ||
    (content && article.content !== content) ||
    (image && article.image !== image);
  if (!isDataChanged) {
    return res.status(400).json({
      message: "تغییراتی لحاظ نشده است , لطفا ابتدا مقادیر را تغییر دهید",
      data: null,
    });
  }
  const result = await Article.findByIdAndUpdate({ _id: id }, update, {
    new: true,
  });
  res.json({ message: "ok", data: result });
}

///////////////////////

export async function removeArticle(req, res) {
  const { id } = req.params;
  const result = await Article.deleteOne({ _id: id });
  await User.findByIdAndUpdate(
    { _id: req.user._id },
    { $inc: { articleCount: -1 } }
  );
  res.json({ message: "ok", data: result });
}

///////////////////

export async function createArticle(req, res) {
  const { title, content } = req.body;
  const imageUrl = `http://localhost:1313/${req.file.filename}`;
  const result = await Article.create({
    title,
    content,
    image: imageUrl,
    author: req.user._id,
  });
  await User.findByIdAndUpdate(
    { _id: req.user._id },
    { $inc: { articleCount: 1 } }
  );
  res.json({ message: "ok", data: result });
}

export async function reportDailyArticle(req, res) {
  const { id } = req.params;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const articles = await Article.find({
    author: id,
    createdAt: { $gte: today },
  }).populate("author", "email userName  articleCount");
  res.json({ message: "ok", data: articles });
}
export async function reportWriteArticlesCount(req, res) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const articles = await Article.aggregate([
    { $match: { createdAt: { $gte: today } } },
    {
      $group: {
        _id: "$author",
        count: { $sum: 1 },
        articles: { $push: "$title" },
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "_id",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: "$user" },
    {
      $project: {
        userName: "$user.userName",
        email: "$user.email",
        userId: "$user._id",
        count: 1,
        article: 1,
      },
    },
  ]);
  res.json({ message: "ok", data: articles });
}

export async function reportInActiveUser(req, res) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const activeUser = await Article.distinct("author", {
    createdAt: { $gte: today },
  });
  const inActiveUser = await User.find({
    _id: { $nin: activeUser },
    role: "writer",
  }).select("-password");
  res.json({ message: "ok", data: inActiveUser });
}

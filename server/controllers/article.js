import Article from "../models/article.js";
import User from "../models/users.js";
import fs from "fs";
//////////////////////
export async function getAllArticle(req, res) {
  const { searchTitle, category } = req.query;
  const filter = {};
  if (category && category !== "null") {
    filter.category = category;
  }
  if (searchTitle && searchTitle !== "null") {
    filter.title = { $regex: searchTitle, $options: "i" };
  }

  const articles = await Article.find(filter)
    .populate("author", "email userName")
    .sort({ createdAt: -1 });
  res.json({ message: "ok", data: articles });
}
export async function getArticle(req, res) {
  const { id } = req.params;
  const article = await Article.findOne({ _id: id }).populate(
    "author",
    "userName email"
  );
  res.json({ message: "ok", data: article });
}
export async function updateArticle(req, res) {
  const { id } = req.params;
  const { title, content } = req.body;
  const update = { title, content };
  const article = await Article.findOne({ _id: id });
  if (req.file) {
    const imagePath = `http://localhost:1313/${req?.file?.filename}`;
    update.image = imagePath;
    fs.unlinkSync(`file/${article?.image.split("/").at(-1)}`);
  }
  if (!article) {
    return res.status(400).json({ message: "Article Not Found", data: null });
  }
  const isDataChanged =
    (title && article.title !== update.title) ||
    (content && article.content !== update.content) ||
    (req.file && article.image !== update.image);
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
  console.log(id);
  const result = await Article.deleteOne({ _id: id });
  await User.findByIdAndUpdate(
    { _id: req.user._id },
    { $inc: { articleCount: -1 } }
  );
  res.json({ message: "ok", data: result });
}

///////////////////

export async function createArticle(req, res) {
  const { title, content, category } = req.body;
  const imageUrl = `http://localhost:1313/${req.file.filename}`;
  const result = await Article.create({
    title,
    content,
    image: imageUrl,
    category,
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

export async function reportArticlePerDay(req, res) {
  const articles = await Article.aggregate([
    {
      $group: {
        _id: {
          $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
        },
        count: { $sum: 1 },
      },
    },
  ]);
  console.log(articles);
  res.json({ message: "ok", data: articles });
}

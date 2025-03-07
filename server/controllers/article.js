import Article from "../models/article.js";
export async function getAllArticle(req, res) {
  const articles = await Article.find({});
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
export async function removeArticle(req, res) {
  const { id } = req.params;
  const result = await Article.deleteOne({ _id: id });
  res.json({ message: "ok", data: result });
}
export async function createArticle(req, res) {
  const { title, content } = req.body;
  console.log(title, content);
  //   const result = await Article.create({ title, content, image: "ssdadwqwq" });
  //   res.json({ message: "ok", data: result });
}

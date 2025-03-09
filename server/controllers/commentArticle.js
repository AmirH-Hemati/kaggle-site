import CommentArticle from "../models/comment.js";

export async function addCommnet(req, res) {
  const { id } = req.params;
  const { text } = req.body;
  const result = await CommentArticle.create({
    user: req.user._id,
    article: id,
    text,
  });
  res.json({ message: "ok", data: result });
}
export async function getCommnets(req, res) {
  const { id } = req.params;
  const comments = await Comment.find({ dataset: id }).populate(
    "user",
    "userName email"
  );

  res.json({ message: "ok", data: comments });
}

export async function repliesCommnet(req, res) {
  const { id } = req.params;
  const { text } = req.body;
  const commnet = await Comment.findOne({ _id: id });
  if (!commnet) {
    return res.status(404).json({ message: "comment not Found!", data: null });
  }
  const reply = { userName: req.user.userName, text };
  const result = await Comment.findByIdAndUpdate(
    { _id: id },
    { $push: { replies: reply } },
    { new: true }
  );
  res.json({ message: "ok", data: result });
}

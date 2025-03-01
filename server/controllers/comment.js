import Comment from "../models/comment.js";

export async function addCommnet(req, res) {
  const { id } = req.params;
  const { text } = req.body;
  console.log(text, id);
  const result = await Comment.create({
    user: req.user._id,
    dataset: id,
    text,
  });
  res.json({ message: "ok", data: result });
}
export async function getCommnets(req, res) {
  const { id } = req.params;
  console.log(req.params);
  const comments = await Comment.find({ dataset: id }).populate(
    "user",
    "userName email"
  );
  res.json({ message: "ok", data: comments });
}

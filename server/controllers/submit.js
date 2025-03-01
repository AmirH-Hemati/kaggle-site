import Submission from "../models/submission.js";
export async function submit(req, res) {
  const { id } = req.params;
  const { description } = req.body;
  const submitFileUrl = `http://localhost:1313/${req?.file?.filename}`;
  const reslut = await Submission.create({
    dataset: id,
    user: req.user._id,
    modelFile: submitFileUrl,
    description,
  });
  res.json({ message: "ok", data: reslut });
}

export async function userSubmissions(req, res) {
  const id = req.user._id;
  const submission = await Submission.find({ user: id })
    .populate("dataset", "title deadline prize createdAt ")
    .populate("user", "userName email");
  res.json({ message: "ok", data: submission });
}

export async function userSubmission(req, res) {
  const { id } = req.params;
  const submission = await Submission.find({ dataset: id })
    .populate("dataset", "title deadline prize")
    .populate("user", "userName");
  res.json({ message: "ok", data: submission });
}

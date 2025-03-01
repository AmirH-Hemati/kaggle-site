import Dataset from "../models/dataset.js";
import submission from "../models/submission.js";
export async function uploadFile(req, res) {
  const { title, description, prize, deadline } = req.body;

  const fileUrl = `http://localhost:1313/${req.file.filename}`;
  const size = req.file.size;
  const uploadedBy = req.user._id;
  const reslut = await Dataset.create({
    title,
    description,
    prize,
    deadline,
    fileUrl,
    size,
    uploadedBy,
  });
  res.json({ message: "ok", data: reslut });
}
export async function myUploads(req, res) {
  const id = req.user._id;
  const datasets = await Dataset.find({ uploadedBy: id });
  res.json({ message: "ok", data: datasets });
}

export async function myUpload(req, res) {
  const { id } = req.params;

  const submissions = await submission
    .find({ dataset: id })
    .populate("user", "userName email");

  if (!submissions) {
    return res
      .status(404)
      .json({ message: "هیچ مدلی برای این مجموعه داده وجود ندارد." });
  }

  res.json({ message: "ok", data: submissions });
}
export async function datasets(req, res) {
  const { search, deadline, minPrize, maxPrize } = req.query;

  const filter = {};
  if (deadline) {
    if (deadline == "active") {
      filter.deadline = { $gte: new Date() };
    }
    if (deadline == "expired") {
      filter.deadline = { $lt: new Date() };
    }
  }
  if (Number(minPrize)) {
    filter.prize = { $gte: Number(minPrize) };
  }
  if (Number(maxPrize)) {
    filter.prize = { $lte: Number(maxPrize) };
  }
  if (search) {
    filter.title = { $regex: search, $options: "i" };
  }
  console.log(filter);
  const datasets = await Dataset.find(filter).populate(
    "uploadedBy",
    "email userName"
  );
  res.json({ message: "ok", data: datasets });
}
export async function dataset(req, res) {
  const { id } = req.params;
  const dataset = await Dataset.findOne({ _id: id }).populate(
    "uploadedBy",
    "email  userName"
  );

  if (!dataset) {
    return res.status(400).json({ message: "Dataset Not Found", data: null });
  }
  res.json({ message: "ok", data: dataset });
}

export async function deleteDataset(req, res) {
  const { id } = req.params;
  const reslut = await Dataset.deleteOne({ _id: id });
  res.json({ message: "ok", data: reslut });
}

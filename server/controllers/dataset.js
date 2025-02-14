import Dataset from "../models/dataset.js";
export async function uploadFile(req, res) {
  const { title, description } = req.body;
  const fileUrl = `http://localhost:1313/${req.file.filename}`;
  const size = req.file.size;
  const uploadedBy = req.user._id;
  const reslut = await Dataset.create({
    title,
    description,
    fileUrl,
    size,
    uploadedBy,
  });
  res.json({ message: "ok", data: reslut });
}
export async function myUpload(req, res) {
  const id = req.user._id;
  const datasets = await Dataset.find({ uploadedBy: id });
  res.json({ message: "ok", data: datasets });
}
export async function datasets(req, res) {
  const { categories, search } = req.query;
  const filter = {};
  if (categories) {
    filter.categories = categories;
  }

  if (search) {
    filter.title = { $regex: search, $options: "i" };
  }

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

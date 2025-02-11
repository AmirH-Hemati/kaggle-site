import Dataset from "../models/dataset.js";
export async function uploadFile(req, res) {
  const { name, description } = req.body;
  const fileUrl = `http://localhost:1313/${req.file.filename}`;
  const size = req.file.size;
  const uploadedBy = req.user._id;
  const reslut = await Dataset.create({
    name,
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

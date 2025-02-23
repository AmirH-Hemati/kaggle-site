import mongoose from "mongoose";
const datasetSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  fileUrl: { type: String },
  size: { type: Number },
  prize: { type: Number },
  deadline: { type: Date },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Dataset", datasetSchema);

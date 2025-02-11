import mongoose from "mongoose";
const datasetSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  fileUrl: { type: String },
  size: { type: Number },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Dataset", datasetSchema);

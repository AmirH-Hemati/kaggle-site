import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  dataset: { type: mongoose.Schema.Types.ObjectId, ref: "Dataset" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  modelFile: { type: String },
  size: { type: Number, default: 1000 },
});

export default mongoose.model("Submission", submissionSchema);

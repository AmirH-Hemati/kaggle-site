import mongoose from "mongoose";
const commnetSchema = new mongoose.Schema(
  {
    dataset: { type: mongoose.Schema.Types.ObjectId, ref: "Dataset" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    text: { type: String },
    replies: [
      {
        userName: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        text: { type: String },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commnetSchema);

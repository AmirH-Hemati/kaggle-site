import mongoose from "mongoose";
const commnetSchema = new mongoose.Schema(
  {
    article: { type: mongoose.Schema.Types.ObjectId, ref: "Article" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    text: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("CommentArticle", commnetSchema);

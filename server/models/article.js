import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    tags: [String],
    iamge: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Article", articleSchema);

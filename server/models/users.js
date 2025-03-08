import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    phone: { type: String },
    password: { type: String },
    email: { type: String },
    userName: { type: String },
    role: { type: String },
    loginAt: { type: Date },
    articleCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

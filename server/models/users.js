import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    phone: { type: String },
    password: { type: String },
    email: { type: String },
    userName: { type: String },
    role: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    phone: { type: String },
    password: { type: String },
    role: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

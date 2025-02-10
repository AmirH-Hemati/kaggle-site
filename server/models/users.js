import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String },
  email: { type: String },
  password: { type: String },
  role: { type: String },
  createAt: { type: Date, default: Date.now() },
});

export default mongoose.model("User", userSchema);

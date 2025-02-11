import User from "../models/users.js";
import bcy from "bcrypt";
import jwt from "jsonwebtoken";
export async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .json({ message: "ایمیل یا پسورد اشتباه است", data: null });
  }
  const isMatch = await bcy.compare(password, user.password);
  if (!isMatch) {
    return res
      .status(400)
      .json({ message: "ایمیل یا پسورد اشتباه است", data: null });
  }
  const token = jwt.sign({ _id: user._id }, "dwqdsadwqgfw45dqdwqs");
  res.json({ message: "ok", data: token });
}
export async function signIn(req, res) {
  const { userName, email, password, role } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res
      .status(400)
      .json({ message: "ایمیل از قبل موجود است", data: null });
  }
  const salt = await bcy.genSalt(12);
  const hashedPassword = await bcy.hash(password, salt);
  const reslut = await User.create({
    email,
    role,
    userName,
    password: hashedPassword,
  });
  res.json({ message: "ok", data: reslut });
}

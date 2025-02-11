import User from "../models/users.js";
import jwt from "jsonwebtoken";
export async function auth(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "Acsess Deniged", data: null });
  }
  try {
    const decode = jwt.verify(token, "dwqdsadwqgfw45dqdwqs");
    const user = await User.findOne({ _id: decode._id }).select("-password");
    if (!user) {
      return res.status(401).json({ message: "Acsess Deniged", data: null });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(402).json({ message: "Acsess Deniged", data: null });
  }
}

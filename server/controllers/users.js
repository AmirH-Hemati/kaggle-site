import User from "../models/users.js";
import bcy from "bcrypt";
import jwt from "jsonwebtoken";
import axios from "axios";

export async function login(req, res) {
  const { phone, password } = req.body;
  const user = await User.findOne({ phone });
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
  res.json({ message: "ok", data: { token: token, role: user?.role } });
}
const OTP_STORE = {};
export async function signIn(req, res) {
  console.log("test in server");
  const { phone } = req.body;
  const user = await User.findOne({ phone });
  if (user) {
    return res
      .status(400)
      .json({ message: "شماره تلفن  از قبل موجود است", data: null });
  }
  const otp = Math.floor(100000 + Math.random() * 900000);
  OTP_STORE[phone] = otp;
  await axios.get(
    `https://api.kavenegar.com/v1/636A6F4B41696C57304D75424F50724654783847476B53716A6151487274655A5855424B554A67704F4D6B3D/sms/send.json`,
    {
      params: {
        sender: "2000660110",
        receptor: phone,
        message: `کد تأیید شما: ${otp}`,
      },
    }
  );
  res.json({ message: "کد احراز هویت ارسال شد .", data: null });
}
export const verifyOTP = async (req, res) => {
  const { phone, otp, password, role } = req.body;
  console.log("store", OTP_STORE[phone]);
  console.log("otpcode", parseInt(otp));
  if (OTP_STORE[phone] != otp) {
    return res.status(400).json({ success: false, message: "کد نادرست است" });
  }
  const salt = await bcy.genSalt(12);
  const hashedPassword = await bcy.hash(password, salt);
  const user = await User.create({ phone, password: hashedPassword, role });
  // console.log(user);
  delete OTP_STORE[phone];

  res.json({ message: "ورود موفقیت‌آمیز!", data: null });
};
// const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//   expiresIn: "7d",
// });

export async function me(req, res) {
  const user = req.user;
  res.json({ message: "ok", data: user });
}

export async function editProfile(req, res) {
  const { email, userName, image } = req.body;
  const updatedUser = { email, userName };
  const currentUser = await User.findOne({ _id: req?.user?._id });
  if (!currentUser) {
    return res.status(404).json({ message: "user Not Found", data: null });
  }

  const isChanged =
    (email && currentUser.email !== email) ||
    (userName && currentUser.userName !== userName);
  if (!isChanged) {
    return res
      .status(400)
      .json({ message: "no change detected , no updated needed", data: null });
  }
  const result = await User.findOneAndUpdate(
    { _id: req?.user?._id },
    updatedUser,
    { new: true }
  );
  res.json({ message: "ok", data: result });
}

export async function users(req, res) {
  const { searchUsers } = req.query;
  const filter = {};
  if (searchUsers && searchUsers !== "null") {
    filter.email = { $regex: searchUsers, $options: "i" };
  }
  console.log(searchUsers);
  const users = await User.find(filter).select("-password");
  res.json({ message: "ok", data: users });
}

export async function getUser(req, res) {
  const { id } = req.params;
  const user = await User.findOne({ _id: id }).select("-password");
  res.json({ message: "ok", data: user });
}

export async function editUser(req, res) {
  const { id } = req.params;
  const { email, userName, phone, role } = req.body;
  const update = { email, userName, phone, role };
  const currentUser = await User.findOne({ _id: id });
  if (!currentUser) {
    return res.status(400).json({ message: "User Not Found", data: null });
  }
  const isDataChanged =
    (email && currentUser.email !== email) ||
    (userName && currentUser.userName !== userName) ||
    (phone && currentUser.phone !== phone) ||
    (role && currentUser.role !== role);
  if (!isDataChanged) {
    return res.status(400).json({
      message: "تغییراتی مشاهده نشد , لطفا ابتدا مقادیر را تغییر دهید",
      data: null,
    });
  }
  const result = await User.findByIdAndUpdate({ _id: id }, update, {
    new: true,
  });
  res.json({ message: "ok", data: result });
}

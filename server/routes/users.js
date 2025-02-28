import express from "express";
import axios from "axios";
import https from "https";

import { login, signIn, verifyOTP } from "../controllers/users.js";
const otp = Math.floor(100000 + Math.random() * 900000);
console.log(otp);
const router = express.Router();

router.post("/login", login);
router.post("/signIn", signIn);
router.post("/verifyOtp", verifyOTP);
router.post("/test", async (req, res) => {
  const { phone } = req.body;

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
  res.json({ success: true, message: "کد OTP ارسال شد." });
});
export default router;

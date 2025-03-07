import express from "express";
import {
  login,
  me,
  signIn,
  verifyOTP,
  editProfile,
  users,
} from "../controllers/users.js";
import { auth } from "../middelwares/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/signIn", signIn);
router.post("/verifyOtp", verifyOTP);
router.get("/me", auth, me);
router.get("/allUsers", auth, users);
router.post("/editProfile", auth, editProfile);
export default router;

import express from "express";
import {
  login,
  me,
  signIn,
  verifyOTP,
  editProfile,
  users,
  getUser,
  editUser,
} from "../controllers/users.js";
import { auth } from "../middelwares/auth.js";
import { authorize } from "../middelwares/authorize.js";

const router = express.Router();

router.post("/login", login);
router.post("/signIn", signIn);
router.post("/verifyOtp", verifyOTP);
router.get("/me", auth, me);
router.get("/allUsers", auth, authorize(["admin"]), users);
router.get("/user/:id", auth, authorize(["admin"]), getUser);
router.put("/user/:id", auth, authorize(["admin"]), editUser);
router.post("/editProfile", auth, editProfile);
export default router;

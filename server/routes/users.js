import express from "express";
import { login, signIn } from "../controllers/users.js";

const router = express.Router();
router.post("/login", login);
router.post("/signIn", signIn);
router.post("/test", (req, res) => {
  console.log("test");
  const { email } = req.body;
  console.log(email);
});
export default router;

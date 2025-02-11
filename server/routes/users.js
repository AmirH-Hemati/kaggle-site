import express from "express";
import { login, signIn } from "../controllers/users.js";

const router = express.Router();
router.post("/login", login);
router.post("/signIn", signIn);
router.get("/signIn", (req, res) => {
  res.send("hellow");
});
export default router;

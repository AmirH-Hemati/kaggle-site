import express from "express";
import { runCode } from "../controllers/analyze.js";
import { auth } from "../middelwares/auth.js";
const router = express.Router();

router.post("/run", auth, runCode);
export default router;

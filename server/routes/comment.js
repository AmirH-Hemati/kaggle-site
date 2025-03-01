import express from "express";
import { auth } from "../middelwares/auth.js";
import { addCommnet, getCommnets } from "../controllers/comment.js";
const router = express.Router();
router.post("/addComment/:id", auth, addCommnet);
router.get("/:id", auth, getCommnets);
export default router;

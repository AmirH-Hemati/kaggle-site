import express from "express";
import { auth } from "../middelwares/auth.js";
import {
  addCommnet,
  getCommnets,
  repliesCommnet,
} from "../controllers/comment.js";
const router = express.Router();
router.post("/addComment/:id", auth, addCommnet);
router.post("/replies/:id", auth, repliesCommnet);
router.get("/:id", auth, getCommnets);
export default router;

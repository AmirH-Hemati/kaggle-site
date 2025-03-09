import express from "express";

import { addRating, getArticleRating } from "../controllers/rating.js";
import { auth } from "../middelwares/auth.js";
const router = express.Router();

router.post("/addRating", auth, addRating);
router.get("/articleRating/:id", getArticleRating);
export default router;

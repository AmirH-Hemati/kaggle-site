import express from "express";
import {
  createArticle,
  getAllArticle,
  getArticle,
  removeArticle,
  reportInActiveUser,
  reportWriteArticles,
  reportWriteArticlesCount,
  updateArticle,
} from "../controllers/article.js";
import { auth } from "../middelwares/auth.js";
import upload from "../controllers/upload.js";
const router = express.Router();

router.get("/allArticles", getAllArticle);
router.get("/reportDailyArticles", reportWriteArticlesCount);
router.get("/reportInActiveUsers", reportInActiveUser);
router.get("/articles/:id", getArticle);
router.put("/articles/:id", updateArticle);
router.delete("/articles/:id", removeArticle);
router.post("/createArticle", auth, upload.single("image"), createArticle);
export default router;

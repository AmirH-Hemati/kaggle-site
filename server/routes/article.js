import express from "express";
import {
  createArticle,
  getAllArticle,
  getArticle,
  removeArticle,
  reportDailyArticle,
  reportInActiveUser,
  reportWriteArticlesCount,
  updateArticle,
} from "../controllers/article.js";
import { auth } from "../middelwares/auth.js";
import upload from "../controllers/upload.js";
const router = express.Router();

router.get("/allArticles", getAllArticle);
router.get("/reportDailyArticles", reportWriteArticlesCount);
router.get("/reportDailyArticle/:id", reportDailyArticle);
router.get("/reportInActiveUsers", reportInActiveUser);
router.get("/articles/:id", getArticle);
router.put("/articles/:id", updateArticle);
router.delete("/articles/:id", removeArticle);
router.post("/createArticle", auth, upload.single("image"), createArticle);
export default router;

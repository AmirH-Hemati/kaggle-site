import express from "express";
import {
  createArticle,
  getAllArticle,
  getArticle,
  latestArticle,
  popularArticles,
  removeArticle,
  reportArticlePerDay,
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
router.get("/reportArticlePerDay", reportArticlePerDay);
router.get("/latestArticle", latestArticle);
router.get("/popularArticle", popularArticles);
router.get("/:id", getArticle);
router.put("/:id", upload.single("image"), updateArticle);
router.delete("/removeArticle/:id", auth, removeArticle);
router.post("/createArticle", auth, upload.single("image"), createArticle);
export default router;

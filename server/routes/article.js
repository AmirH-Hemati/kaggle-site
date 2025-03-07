import express from "express";
import {
  createArticle,
  getAllArticle,
  getArticle,
  removeArticle,
  updateArticle,
} from "../controllers/article.js";
const router = express.Router();

router.get("/allArticles", getAllArticle);
router.get("/articles/:id", getArticle);
router.put("/articles/:id", updateArticle);
router.delete("/articles/:id", removeArticle);
router.post("/createArticle", createArticle);
export default router;

import express from "express";
import mongoose from "mongoose";
import usersRouter from "./routes/users.js";
import datasetRouter from "./routes/dataset.js";
import analyzeRouter from "./routes/analyze.js";
import submitRouter from "./routes/submission.js";
import articleRouter from "./routes/article.js";
import ratingRouter from "./routes/rating.js";
import commentRouter from "./routes/comment.js";
import commentArticleRouter from "./routes/commentArticle.js";
import User from "./models/users.js";
import bcy from "bcrypt";
import cors from "cors";
const app = express();

app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/keggle-site")
  .then(() => {
    console.log("conected mongodb");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.static("file"));
app.use("/api/users/", usersRouter);
app.use("/api/dataset/", datasetRouter);
app.use("/api/submit/", submitRouter);
app.use("/api/rating/", ratingRouter);
app.use("/api/comment/", commentRouter);
app.use("/api/commentArticle/", commentArticleRouter);
app.use("/api/rating/", commentArticleRouter);
app.use("/api/analyze/", analyzeRouter);
app.use("/api/articles/", articleRouter);
app.listen(1313, () => {
  console.log("server listen to 1313");
});

async function name() {
  const salt = await bcy.genSalt(12);
  const hashedPassword = await bcy.hash("123", salt);
  await User.create({
    phone: "1234",
    role: "analyzer",
    password: hashedPassword,
  });
}
// name();

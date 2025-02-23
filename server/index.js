import express from "express";
import mongoose from "mongoose";
import usersRouter from "./routes/users.js";
import datasetRouter from "./routes/dataset.js";
import analyzeRouter from "./routes/analyze.js";
import submitRouter from "./routes/submission.js";
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
app.use("/api/analyze/", analyzeRouter);
app.listen(1313, () => {
  console.log("server listen to 1313");
});

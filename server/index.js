import express from "express";
import mongoose from "mongoose";
import usersRouter from "./routes/users.js";
import datasetRouter from "./routes/dataset.js";
import cors from "cors";
import { exec } from "child_process";
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
app.post("/run", (req, res) => {
  const { code } = req.body;
  const cleanedCode = code.replace(/\r?\n|\r/g, " ");

  exec(
    `python -c "${cleanedCode.replace(/"/g, '\\"')}"`,
    (error, stdout, stderr) => {
      console.log("errr", error);
      if (error) {
        return res.json({ output: stderr || error.message });
      }
      console.log(stdout);
      res.json({ output: stdout });
    }
  );
});
app.use(express.static("file"));
app.use("/api/users/", usersRouter);
app.use("/api/dataset/", datasetRouter);
app.listen(1313, () => {
  console.log("server listen to 1313");
});

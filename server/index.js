import express from "express";
import mongoose from "mongoose";
import usersSchema from "./routes/users.js";
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
app.use("/api/users", usersSchema);
app.listen(1313, () => {
  console.log("server listen to 1313");
});

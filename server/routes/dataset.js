import express from "express";
import upload from "../controllers/upload.js";
import { auth } from "../middelwares/auth.js";
import { uploadFile } from "../controllers/dataset.js";
const router = express.Router();

router.post("/upload", auth, upload.single("file"), uploadFile);

export default router;

import express from "express";
import upload from "../controllers/upload.js";
import { auth } from "../middelwares/auth.js";
import { myUpload, uploadFile, datasets } from "../controllers/dataset.js";
const router = express.Router();

router.get("/", auth, datasets);
router.post("/upload", auth, upload.single("file"), uploadFile);
router.get("/myUploads", auth, myUpload);

export default router;

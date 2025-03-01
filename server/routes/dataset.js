import express from "express";
import upload from "../controllers/upload.js";
import { auth } from "../middelwares/auth.js";
import {
  myUploads,
  uploadFile,
  datasets,
  dataset,
  deleteDataset,
  myUpload,
} from "../controllers/dataset.js";
const router = express.Router();

router.get("/",  datasets);
router.put("/:id", auth, dataset);
router.delete("/:id", auth, deleteDataset);
router.post("/upload", auth, upload.single("file"), uploadFile);
router.get("/myUploads", auth, myUploads);
router.get("/myUploads/:id", auth, myUpload);

export default router;

import express from "express";
import {
  submit,
  userSubmissions,
  userSubmission,
} from "../controllers/submit.js";
import upload from "../controllers/upload.js";
import { auth } from "../middelwares/auth.js";
const router = express.Router();

router.get("/mySubmissions", auth, userSubmissions);
router.get("/mySubmission/:id", auth, userSubmission);
router.post("/:id", auth, upload.single("submitFile"), submit);

export default router;

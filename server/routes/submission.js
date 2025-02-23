import express from "express";
import { submit, userSubmissions } from "../controllers/submit.js";
import upload from "../controllers/upload.js";
import { auth } from "../middelwares/auth.js";
const router = express.Router();

router.post("/:id", auth, upload.single("submitFile"), submit);
router.get("/mySubmission", auth, userSubmissions);

export default router;

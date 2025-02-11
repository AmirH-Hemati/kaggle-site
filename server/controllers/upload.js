import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "file");
  },
  filename: (req, file, cb) => {
    const now = Date.now();
    cb(null, now + file.originalname);
  },
});

const upload = multer({ storage: storage });

export default upload;

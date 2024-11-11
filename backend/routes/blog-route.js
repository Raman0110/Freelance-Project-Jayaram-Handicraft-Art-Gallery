import express from "express";
import { addBlog, deleteBlog, getBlog, getBlogById, getBlogBySlug, updateBlog } from "../controllers/blog-controller.js";
import multer from "multer";
import verifyAuth from "../middleware/verify-auth.js";

const router = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads/blogs");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
})


export const upload = multer({ storage });

router.get("/", getBlog);
router.get("/:id", getBlogById);
router.get("/get/:slug", getBlogBySlug);
router.post("/add", verifyAuth, upload.single("image"), addBlog);
router.put("/update/:id", verifyAuth, upload.single("image"), updateBlog);
router.delete("/delete/:id", verifyAuth, deleteBlog);

export default router;
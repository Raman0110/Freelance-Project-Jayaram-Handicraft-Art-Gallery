import express from "express"
import { addCategory, updateCategory, deleteCategory, getCategory, getCategoryById, getCategoryWithProduct } from "../controllers/category-controller.js";
// import { categoryUpload } from "../middleware/upload.js";
import multer from "multer";

const router = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads/categories");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });
router.get("/category-product", getCategoryWithProduct);
router.get("/", getCategory);
router.get("/:id", getCategoryById);
router.post("/add", upload.single('image'), addCategory);
router.put("/update/:id", upload.single('image'), updateCategory);
router.delete("/delete/:id", deleteCategory);


export default router;
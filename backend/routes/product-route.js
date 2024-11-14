import express from "express";
import { getProductById, getProduct, addProduct, updateProduct, deleteProduct, getProductBySlug, shopProducts, getProductMessage } from "../controllers/product-controller.js";
import multer from "multer";
import verifyAuth from "../middleware/verify-auth.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads/products");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
})

const upload = multer({ storage });

router.get("/shop", shopProducts);
router.get("/", getProduct);
router.get("/:id", getProductById);
router.get("/get/:slug", getProductBySlug);
router.post("/add", verifyAuth, upload.fields([{ name: "image" }, { name: "thumbnails" }]), addProduct);
router.post("/message", getProductMessage)
router.put("/update/:id", verifyAuth, upload.fields([{ name: "image" }, { name: "thumbnails" }]), updateProduct);
router.delete("/delete/:id", verifyAuth, deleteProduct);


export default router;
import { addSlider, viewSliders, viewSliderById, updateSlider, deleteSlider } from "../controllers/slider-controller.js";
import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads/sliders");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
})


export const upload = multer({ storage });


router.get("/", viewSliders);
router.get("/:id", viewSliderById);
router.post("/add", upload.single('image'), addSlider);
router.put("/update/:id", upload.single('image'), updateSlider);
router.delete("/delete/:id", deleteSlider);


export default router;
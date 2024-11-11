import express from "express";
import { deleteMessage, getMessage, postMessage } from "../controllers/message-controller.js";
const router = express.Router();

router.get("/", getMessage);
router.post("/add", postMessage);
router.delete("/delete/:id", deleteMessage);


export default router;
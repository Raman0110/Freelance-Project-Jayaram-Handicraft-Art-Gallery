import express from "express";
import { register, login, logout, authenticateUser, getUser, updateUser } from "../controllers/auth-controller.js";
import verifyAuth from "../middleware/verify-auth.js";
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/user', getUser);
router.put('/user/update/:id', verifyAuth, updateUser);
router.get('/authenticate', verifyAuth, authenticateUser)

export default router
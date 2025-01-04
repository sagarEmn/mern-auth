import express from "express";
import { signup, logout, verifyEmail } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);

export default router;

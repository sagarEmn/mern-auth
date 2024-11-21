import express from "express";
import { login, logout, signup } from "../controllers/auth.controller";

const router = express.Router();

// auth.route.js is about routing:
// - defines which URLs to go to
// - maps URLs to specific controller functions
// - uses "router" from express for route structure setup
router.get("/signup", signup);

router.get("/login", login);

router.get("/logout", logout);

export default router;

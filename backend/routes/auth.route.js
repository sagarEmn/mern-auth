import express from "express";
import { login, signup } from "../controllers/auth.controller";

const router = express.Router();

router.get("/signup", signup);

router.get("/login", login);

router.get("/logout", (req, res) => {
    res.send("Logout route");
});

export default router;
import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./db/connectDB.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/home", (req, res) => {
    res.send("This is home");
})

app.listen(3000, () => {
    connectDB();
    console.log("Server is running on port 3000");
});
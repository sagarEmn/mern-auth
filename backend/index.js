import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log("Server is running on port 5000");
})
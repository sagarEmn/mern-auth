import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/home", (req, res) => {
    res.send("This is home");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

console.log(app);
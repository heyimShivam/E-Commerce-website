import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    res.send("This endpoint is working fine.");
})

app.listen(PORT, () => {
    console.log("Port " + PORT + " is live");
})
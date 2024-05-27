import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import ConnetDB from "./config/db.js";
import Router from "./routes/index.js";

dotenv.config({
    path: `.env`
});

const app = express();
const PORT = 7000;

app.use(cors());
app.use("/api", Router);

ConnetDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to div");
        console.log("Port " + PORT + " is live");
    })
}).catch((err) => { console.log(err) });

app.get("/", (req, res) => {
    res.send("This endpoint is working.");
})
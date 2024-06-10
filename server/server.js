import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import ConnetDB from "./config/db.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";

dotenv.config({
    path: `.env`
});

const app = express();
const PORT = 7000;

// understand it.
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routing
app.use("/api", router);

ConnetDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to div");
        console.log("Port " + PORT + " is live");
    })
}).catch((err) => {
    console.log(err)
});

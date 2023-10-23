import express from "express";
//import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
import cors from "cors";

import dotenv from 'dotenv';
dotenv.config();

let app = express();
app.use(cors({ credentials: true, origin: true }));

//config app

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
//if PORT === undefinded => port = 6969

app.listen(port, () => {
    console.log("Backen NodeJs is runing on port: " + port)
})

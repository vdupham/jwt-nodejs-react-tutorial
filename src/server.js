import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";

//Cau lenh de chay process.env lay gia tri trong .env
require("dotenv").config();

const app = express();

//config View Engine
configViewEngine(app);

 //init Web Routes
initWebRoutes(app);

// || de backup khi PORT 8080 chua duoc khai bao
// doan code lay thong so Port tu file .env
const PORT = process.env.PORT || 8081;
app.listen(PORT, ()=> {
    console.log(">>> JWT Backend is running on port = "+PORT);
})
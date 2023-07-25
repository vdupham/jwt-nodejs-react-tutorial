import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";

//Cau lenh de chay process.env lay gia tri trong .env
require("dotenv").config();

let app = express();

//config View Engine
configViewEngine(app);

 //init Web Routes
initWebRoutes(app);

// || de backup khi PORT trong .env chua duoc khai bao hoac bi loi
// doan code lay thong so Port tu file .env
let PORT = process.env.PORT || 8081;
app.listen(PORT, ()=> {
    console.log(">>> JWT Backend is running on port = "+PORT);
})
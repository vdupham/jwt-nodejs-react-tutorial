import express from "express";
import homeCotroller from "../controller/homeCotroller";

let router = express.Router();

/**
 *
 * @param {*} app :  express app
 */
let initWebRoutes = (app) => {
  router.get('/',homeCotroller.getHomePage);
  router.get('/about',homeCotroller.getAboutPage);
  return app.use("/", router);
}
//export
module.exports = initWebRoutes;
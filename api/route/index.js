import express from "express";
import productsRouter from "./products.js";
import serchRouter from "./serch.js";
const app = express();

function routerApi(app) {
  const router = express.Router();
  app.use("/api/products", productsRouter);
  app.use("/api/serch", serchRouter);
}

export default routerApi;

import express from "express";
import usersRouter from "./user.js";
import productsRouter from "./products.js";
import serchRouter from "./search.js";
import authRouter from "./auth.js";
import ordersRouter from "./orders.js";

const app = express();

function routerApi(app) {
  app.use("/api/products", productsRouter);
  app.use("/api/serch", serchRouter);
  app.use("/api/users", usersRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/orders", ordersRouter);
}

export default routerApi;

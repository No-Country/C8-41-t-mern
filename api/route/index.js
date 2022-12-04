import express from "express";
import usersRouter from "./user.js";
import productsRouter from "./products.js";
import serchRouter from "./search.js";
import authRouter from "./auth.js";
import ordersRouter from "./orders.js";
import passwordReset from "./passwordReset.js";
import compraRouter from "./mercadopago.js";
const app = express();

function routerApi(app) {
  app.use("/api/products", productsRouter);
  app.use("/api/search", serchRouter);
  app.use("/api/users", usersRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/orders", ordersRouter);
  app.use("/api/password-reset", passwordReset);
  app.use("/api/compra", compraRouter);
}

export default routerApi;

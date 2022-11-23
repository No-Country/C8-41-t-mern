import express from "express";
import productsRouter from "./products.js";
import searchRouter from "./search.js";
import registerRouter from "./register.js";
import userRouter from "./user.js";
const app = express();

function routerApi(app) {
  const router = express.Router();
  app.use("/api/products", productsRouter);
  app.use("/api/search", searchRouter);
  app.use("/api/register", registerRouter);
  app.use("/api/user", userRouter);
}

export default routerApi;

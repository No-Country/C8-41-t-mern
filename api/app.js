import express from "express";
import dotenv from "dotenv";
import routerProducts from "./route/products.js";
import config from "./config/config.js";
dotenv.config();

const app = express();

const port = process.env.PORT;
app.use("/", routerProducts);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

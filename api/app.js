import "dotenv/config.js";
import express from "express";
// import dotenv from "dotenv";
// import routerProducts from "./route/products.js";
import config from "./config/config.js";
import routerApi from "./route/index.js";
const port = process.env.PORT;
const app = express();
app.use(express.json())


routerApi(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

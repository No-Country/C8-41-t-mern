const express = require("express");
const app = express();
const port = 3000;
const homeRouter = require("../src/route/route");
require("dotenv").config({ path: "../src/.env" });
app.use("/", homeRouter);
console.log(process.env.PORT);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

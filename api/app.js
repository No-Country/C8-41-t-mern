import express from 'express'
import dotenv from 'dotenv';
import router from './route/route.js';

dotenv.config();

const app = express();


// const homeRouter = require("../src/route/route");

// require("dotenv").config({ path: "../api/.env" });
const port = process.env.PORT
app.use("/", router);
console.log(process.env.PORT);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

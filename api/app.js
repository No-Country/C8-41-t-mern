import "dotenv/config.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import config from "./config/config.js";
import routerApi from "./route/index.js";
dotenv.config();
const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());

const dominiosPertmitidos = ["https://c8-41-t-mern.vercel.app"];

 const corsOptions = {
   origin: function (origin, callback) {
     if (dominiosPertmitidos.indexOf(origin) !== -1) {
       //El origen del request esta permitido
       callback(null, true);
     } else {
      callback(new Error("No permitido por CORS"));
    }
  },
 };


 app.use(cors(corsOptions));




routerApi(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

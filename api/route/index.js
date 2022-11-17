import express from "express";
import productsRouter from './products.js';

const app = express();

function routerApi(app) {
    const router = express.Router();
    app.use('/api/products', productsRouter);
  }
  

export default routerApi;
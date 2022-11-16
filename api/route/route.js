import express from "express";
import { getProducts } from '../controller/products.js'

const router = express.Router();
// const controller = require("../controller/products");

router.get("/", getProducts);

export default router

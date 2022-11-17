import express from "express";
import { getProducts, createProducts } from "../controller/products.js";

const router = express.Router();
// const controller = require("../controller/products");

router.get("/", getProducts);
router.post("/", createProducts);

export default router;

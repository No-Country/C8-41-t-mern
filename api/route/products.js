import express from "express";
import { getProducts, getOneProduct, createProducts, updateProduct } from "../controller/products.js";

const router = express.Router();
// const controller = require("../controller/products");


router.get("/", getProducts);
router.get("/:id", getOneProduct);
router.post("/", createProducts);
router.patch("/:id", updateProduct)

export default router;

import express from "express";

import {
  getProducts,
  getOneProduct,
  createProducts,
  updateProduct,
} from "../controller/products.js";

import { validateCreate } from "../validator/products.js";

const router = express.Router();
// const controller = require("../controller/products");
router.use(express.json());
router.get("/", getProducts);
router.post("/", validateCreate, createProducts);
router.patch("/:id", updateProduct);
router.get("/:id", getOneProduct);

export default router;

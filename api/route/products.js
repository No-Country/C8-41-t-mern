import express from "express";

import {
  getProducts,
  getOneProduct,
  createProducts,
  updateProduct,
  deleteProduct,
} from "../controller/products.js";
import { validateId } from "../validator/id.js";
import { validateCreate } from "../validator/products.js";

const router = express.Router();
// const controller = require("../controller/products");
router.use(express.json());
router.get("/", getProducts);
router.post("/", validateCreate, createProducts);
router.patch("/:id", validateCreate, updateProduct);
router.get("/:id", validateId, getOneProduct);
router.delete("/:id", validateId, deleteProduct);

export default router;

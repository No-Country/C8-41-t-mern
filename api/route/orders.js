import express from "express";

import {
  getOrders,
  getOneOrder,
  createOrder,
} from "../controller/orders.js";

import { validateCreate } from "../validator/orders.js";

const router = express.Router();

router.use(express.json());
router.get("/", getOrders);
router.post("/", validateCreate, createOrder);
router.get("/:id", getOneOrder);
// router.patch("/:id", updateProduct);

export default router;

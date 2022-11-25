import express from "express";

import {
  getOrders,
  getOneOrder,
  createOrder,
  getOrdersUser,
} from "../controller/orders.js";

import { validateCreate } from "../validator/orders.js";

const router = express.Router();

router.use(express.json());
router.get("/", getOrders);
router.post("/", validateCreate, createOrder);
router.get("/:id", getOneOrder);
router.get("/misOrdenes/:id", getOrdersUser);

export default router;

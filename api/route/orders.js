import express from "express";
import { isAdminRole } from "../middlewares/index.js";

import {
  getOrders,
  getOneOrder,
  createOrder,
  getOrdersUser,
  updateOrder,
} from "../controller/orders.js";

import { validateCreate, validateUpdate } from "../validator/orders.js";

const router = express.Router();

router.use(express.json());
router.get("/", getOrders);
router.post("/", validateCreate, createOrder);
router.get("/:id", getOneOrder);
router.get("/misOrdenes/:id", getOrdersUser);
router.put("/:id",isAdminRole, validateUpdate, updateOrder);

export default router;

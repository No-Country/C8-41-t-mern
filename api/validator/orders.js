import { check } from "express-validator";
import { validateResult } from "../helper/validateHelper.js";

const validateCreate = [
  check("orderItems").exists().not().isEmpty(),

  check("shippingAddress.*.address").exists().not().isEmpty().trim(),

  check("shippingAddress.*.city").not().isEmpty.trim(),

  check("shippingAddress.*.zip").isPostalCode(),

  check("phone").exists().not().isEmpty().trim(),

  check("orderStatus").exists().not().isEmpty().trim(),

  check("orderDate").exists().isNumeric(),

  check("deliveryDate").exists().not().isEmpty().trim(),

  check("totalPrice").exists().not().isEmpty().trim(),

  check("user").exists().not().isEmpty().trim(),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export { validateCreate };

import { check } from "express-validator";
import { validateResult } from "../helper/validateHelper.js";

const validateCreate = [
  check("orderItems").exists().bail().isArray().notEmpty(),

  check("shippingAddress.address").exists().bail().notEmpty().bail().trim(),

  check("shippingAddress.city").optional().notEmpty().bail().trim(),

  check("shippingAddress.zip").optional().notEmpty().bail().trim(),

  check("phone").exists().bail().notEmpty().bail().trim(),

  check("totalPrice").exists().notEmpty().bail().isDecimal(),

  check("userId").exists().isMongoId().bail().notEmpty().bail().trim(),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateUpdate = [
  check("orderItems").optional().isArray().notEmpty(),

  check("shippingAddress.address").optional().notEmpty().bail().trim(),

  check("shippingAddress.city").optional().notEmpty().bail().trim(),

  check("shippingAddress.zip").optional().notEmpty().bail().trim(),

  check("phone").optional().notEmpty().bail().trim(),

  check("orderStatus").optional().notEmpty().bail().trim(),
  
  // check("deliveryDate").optional().notEmpty().bail().isDate(),

  check("totalPrice").optional().notEmpty().bail().isDecimal(),

  check("userId").optional().isMongoId().bail().notEmpty().bail().trim(),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export { validateCreate, validateUpdate };

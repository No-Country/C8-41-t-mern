import { check } from "express-validator";
import { validateResult } from "../helper/validateHelper.js";

const validateCreate = [
  check("orderItems").exists().bail().isArray().notEmpty(),

  check("shippingAddress.address").exists().bail().notEmpty().bail().trim(),

  check("phone").exists().bail().notEmpty().bail().trim(),

  check("userId").exists().bail().notEmpty().bail().trim(),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export { validateCreate };

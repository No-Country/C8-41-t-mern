import { check } from "express-validator";
import { validateResult } from "../helper/validateHelper.js";

const validateId = [
  check("id").isMongoId(),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export { validateId };

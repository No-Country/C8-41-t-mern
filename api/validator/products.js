import { check } from "express-validator";
import { validateResult } from "../helper/validateHelper.js";

const validateCreate = [
  check("id").isMongoId(),

  check("name").exists().not().isEmpty().trim(),

  check("image").exists().not().isEmpty().trim(),

  check("materials").exists().not().isEmpty().trim(),

  check("description").exists().not().isEmpty().trim(),

  check("price").exists().isNumeric(),

  check("delay").exists().not().isEmpty().trim(),

  check("sold").exists().isNumeric(),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export { validateCreate };

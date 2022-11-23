import { check } from "express-validator";
import { validateResult } from "../helper/validateHelper.js";

const validateUpdateUser = [
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom( existeUsuarioPorId ),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export { validateUpdateUser };

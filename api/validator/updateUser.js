import { check } from "express-validator";
import { exitsUserById } from "../helper/db-validators.js";

const validateUpdateUser = [
  check('id', 'No es un ID válido').isMongoId(),
  check('id').custom( exitsUserById ),
];

export { validateUpdateUser };

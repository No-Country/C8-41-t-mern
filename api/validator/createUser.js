import { check } from "express-validator";

const validateCreateUser = [
  check("name", "El nombre es obligatorio").exists().not().isEmpty().trim(),

  check("email", "El correo no es válido").exists().isEmail().trim(),

  check("passwordHash", "El password debe de ser más de 6 letras").exists().isLength({ min:6 }).trim(),

  check("street", "Dirección no válida").exists().not().isEmpty().trim(),

  check("phone", "Número no válido").exists().isNumeric().isLength({ min:6 }),

  check("zip", "El código postal no es válido").exists().not().isEmpty().trim()
];

export { validateCreateUser };

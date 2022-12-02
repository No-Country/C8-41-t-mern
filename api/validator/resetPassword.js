import { check } from "express-validator";

const validateResetPassword = [
  check("passwordHash", "El password debe de ser más de 6 letras").exists().isLength({ min:6 }).trim(),
];

export { validateResetPassword };

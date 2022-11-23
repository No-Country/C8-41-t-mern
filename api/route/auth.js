import express from "express";
import { check } from "express-validator";
import { validateResult } from "../helper/validateHelper.js";
import { login } from "../controller/auth.js";

const router = express.Router();
router.use(express.json());
router.post("/login", [
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validateResult
], login);

export default router;
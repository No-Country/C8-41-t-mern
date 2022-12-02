import express from "express";

import { passwordReset, passwordResetUser } from "../controller/user.js";

//Validator and middleware
import { validateJWTPass } from "../middlewares/validate-jwt-password-recovery.js";
import { validateResetPassword } from "../validator/resetPassword.js";

const router = express.Router();
router.use(express.json());

router.get("/", passwordReset);
router.put(
  "/:userId/:token",
  [validateResetPassword, validateJWTPass],
  passwordResetUser
);

export default router;

import express from "express";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  changePass,
} from "../controller/user.js";

//Middlewares
import {
  validateFields,
  validateJWT,
  isAdminRole,
} from "../middlewares/index.js";

//Validators
import { validateUpdateUser, validateCreateUser } from "../validator/index.js";

const router = express.Router();
router.use(express.json());

router.get("/", [validateJWT, isAdminRole], getUsers);

router.post("/", [validateCreateUser, validateFields], createUser);

router.patch(
  "/:id",
  [validateJWT, validateUpdateUser, validateFields],
  updateUser
);

router.delete(
  "/:id",
  [validateJWT, isAdminRole, validateUpdateUser, validateFields],
  deleteUser
);
router.patch("/passChange/:id", validateJWT, changePass);


export default router;

import express from "express";
import { addCart, deleteCart, updateCartQuality } from "../controller/cart.js";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
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

router.patch("/:id", [validateUpdateUser, validateFields], updateUser);

router.delete(
  "/:id",
  [validateJWT, isAdminRole, validateUpdateUser, validateFields],
  deleteUser
);

//Rutas para carrito
router.delete("/deletecart/:id", deleteCart);
router.patch("/addcart/:id", addCart);
router.patch("/Uquantity/:id", updateCartQuality);
export default router;

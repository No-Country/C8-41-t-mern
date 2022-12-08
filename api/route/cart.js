import express, { Router } from "express";
import { addCart, deleteCart, updateCartQuantity } from "../controller/cart.js";
const router = express.Router();
//import cart from "../controller/cart.js";

//Rutas para carrito
router.patch("/deletecart/:id", deleteCart);
router.patch("/addcart/:id", addCart);
router.patch("/Uquantity/:id", updateCartQuantity);
//router.post("/", cart);

export default router;

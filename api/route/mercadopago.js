import express, { Router } from "express";
const router = express.Router();
import compraMp from "../controller/mercadopago.js";

router.post("/", compraMp);

export default router;

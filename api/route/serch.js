import express from "express";
const router = express.Router();
import { serchProducts } from "../controller/serch.js";
router.get("/", serchProducts);

export default router;

import express from "express";
const router = express.Router();
import { searchProducts } from "../controller/search.js";

router.get("/", searchProducts);

export default router;

import express from "express";
const router = express.Router();
import {ver} from "../controller/recepcion.js"
router.get("/",ver);



export default router;
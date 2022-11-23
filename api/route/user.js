import express from "express";
import { get } from "mongoose";
import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controller/user.js";
const router = express.Router();

router.post("/", createUser);
router.get("/", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);
export default router;

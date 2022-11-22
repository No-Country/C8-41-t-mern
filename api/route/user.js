import express from "express";
import { getUsers, createUser, updateUser, deleteUser } from "../controller/user.js";
import { validateCreateUser } from "../validator/users.js";

const router = express.Router();
router.use(express.json());
router.get("/", getUsers);
router.post("/", validateCreateUser, createUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser)

export default router;

import express from "express";
import {
  deleteUsers,
  getUsers,
  test,
  getUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.get("/getusers", verifyToken, getUsers);
router.delete("/delete/:userId", verifyToken, deleteUsers);
router.get("/:userId", getUser);

export default router;

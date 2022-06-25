import express from "express";
import { updateUser, deleteUser, getUser, getUsers, getUserStats } from "../controllers/user.js";
import { verifyTokenAndAuthorization, verifyTokenAndAdmin } from "../middleware/verifyToken.js";

const router = express.Router();

router.put("/:id",verifyTokenAndAuthorization, updateUser);
router.delete("/:id", verifyTokenAndAuthorization, deleteUser)
router.get("/find/:id", verifyTokenAndAdmin, getUser)
router.get("/find", verifyTokenAndAdmin, getUsers)
router.get("/stats", verifyTokenAndAdmin, getUserStats)

export default router;

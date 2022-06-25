import express from "express";
import {
  createOrder,
  updateOrder,
  getOrder,
  getOrders,
  getIncome,
} from "../controllers/order.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createOrder);
router.put("/:id", verifyTokenAndAdmin, updateOrder);
router.delete("/:id", verifyTokenAndAdmin, updateOrder);
router.get("/find/:userId", verifyTokenAndAuthorization, getOrder);
router.get("/", verifyTokenAndAdmin, getOrders);
router.get("/income", verifyTokenAndAdmin, getIncome)

export default router;

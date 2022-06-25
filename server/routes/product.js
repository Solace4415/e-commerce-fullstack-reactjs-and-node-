import express from "express";
import { createProduct, updateProduct, deleteProduct, getProduct, getProducts } from "../controllers/product.js";
import {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyTokenAndAdmin, createProduct);
router.put("/: id", verifyTokenAndAdmin, updateProduct);
router.delete("/: id", verifyTokenAndAdmin, deleteProduct);
router.get("/find/: id",  getProduct);
router.get("/find",  getProducts);
export default router;

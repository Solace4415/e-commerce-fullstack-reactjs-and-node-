import express from "express";
import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js"

const app = express();
dotenv.config();

//Body Parser
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute)

mongoose.connect(process.env.CONNECTION_URL);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Backend server is running!".yellow);
});

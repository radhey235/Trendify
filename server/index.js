import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
import cartRouter from "./routes/cart.route.js";
import orderRouter from "./routes/order.route.js";

dotenv.config();
connectDB();

const app = express();

// CORS middleware
app.use(cors({
  origin: "https://trendify-1-fk7d.onrender.com"
}));

// Body parser
app.use(express.json());

// Root route - ADD THIS
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Trendify API",
    status: "Server is running successfully",
    version: "1.0.0",
    endpoints: {
      users: "/api/v1/users",
      products: "/api/v1/products",
      cart: "/api/v1/cart",
      orders: "/api/v1/order"
    }
  });
});

// API Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/order", orderRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

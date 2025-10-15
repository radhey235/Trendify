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

const allowedOrigins = [
  "http://localhost:5173",                
  "https://trendify-1-fk7d.onrender.com" 
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);

    const cleanOrigin = origin.replace(/\/$/, "");
    if (allowedOrigins.includes(cleanOrigin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true // if you use cookies or auth
}));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/order", orderRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

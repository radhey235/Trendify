import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from './routes/user.route.js'
import productRouter from'./routes/product.route.js'
import cartRouter from './routes/cart.route.js'
import orderRouter from './routes/order.route.js'

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: "http://localhost:5173", // allow your React dev server
  credentials: true
}));
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use(express.static('dist'))
app.get('/api/v1',(request,response)=>{
    response.send("server")
})
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use('/api/v1/users',userRouter);
app.use('/api/v1/products',productRouter)
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/order", orderRouter);
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

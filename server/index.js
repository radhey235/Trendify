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

const allowedOrigins = [
  'http://localhost:5173',
  'https://trendify-1-fk7d.onrender.com' // your deployed frontend
];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin (like mobile apps, curl)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
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

// server/models/order.model.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true },
    }
  ],
  totalPrice: { type: Number, required: true },
  status: { type: String, default: "pending" }, // pending, shipped, delivered
  createdAt: { type: Date, default: Date.now }
});

const orderModel = mongoose.model("Order", orderSchema);

export default orderModel;
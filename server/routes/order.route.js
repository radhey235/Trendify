// server/routes/order.routes.js
import express from "express";
import { createOrder, getUserOrders } from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);          // create order from cart
orderRouter.get("/:userId", getUserOrders); // get all orders for a user

export default orderRouter;

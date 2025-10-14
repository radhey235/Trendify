// server/routes/cart.routes.js
import express from "express";
import { getCart, addToCart, removeFromCart } from "../controllers/cart.controller.js";

const cartRouter = express.Router();

cartRouter.get("/:userId", getCart);
cartRouter.post("/add", addToCart);
cartRouter.post("/remove", removeFromCart);

export default cartRouter;

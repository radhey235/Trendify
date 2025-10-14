import express from "express";
import {getProducts,getProductById,addProductsBulk, addProduct} from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/bulk-add", addProductsBulk); // ← POST route for bulk insert
productRouter,post("/add",parser.array("images", 5),addProduct);
export default productRouter;

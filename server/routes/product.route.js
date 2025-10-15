import express from "express";
import {getProducts,getProductById} from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.get("/all", getProducts);
productRouter.get("/:id", getProductById);


export default productRouter;

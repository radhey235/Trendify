// server/controllers/cart.controller.js
import Cart from "../models/cart.model.js";

// Get user's cart
export const getCart = async (req, res) => {
  const { userId } = req.params;
  try {
    const cart = await Cart.findOne({ user: userId }).populate("products.product");
    res.json(cart || { products: [] });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch cart" });
  }
};

// Add product to cart
export const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, products: [{ product: productId, quantity }] });
    } else {
      const existing = cart.products.find(p => p.product.toString() === productId);
      if (existing) {
        existing.quantity += quantity;
      } else {
        cart.products.push({ product: productId, quantity });
      }
    }
    cart.updatedAt = Date.now();
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: "Failed to update cart" });
  }
};

// Remove product from cart
export const removeFromCart = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.products = cart.products.filter(p => p.product.toString() !== productId);
    cart.updatedAt = Date.now();
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: "Failed to remove product" });
  }
};

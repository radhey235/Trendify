// server/controllers/order.controller.js
import Order from "../models/order.model.js";
import Cart from "../models/cart.model.js";

// Create order from cart
export const createOrder = async (req, res) => {
  const { userId } = req.body;
  try {
    const cart = await Cart.findOne({ user: userId }).populate("products.product");
    if (!cart || cart.products.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const totalPrice = cart.products.reduce(
      (sum, item) => sum + item.product.price * item.quantity, 0
    );

    const order = new Order({
      user: userId,
      products: cart.products.map(p => ({ product: p.product._id, quantity: p.quantity })),
      totalPrice
    });

    await order.save();

    // Clear cart after order
    cart.products = [];
    await cart.save();

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: "Failed to create order" });
  }
};

// Get user's orders
export const getUserOrders = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await Order.find({ user: userId }).populate("products.product");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

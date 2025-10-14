import React from "react";
import { useCart } from "../context/CartContext";

const Order = () => {
  const { cart, clearCart } = useCart();

  if (cart.length === 0)
    return (
      <div className="p-8 text-center text-gray-500">
        Your cart is empty. Add some products first!
      </div>
    );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-amber-500 mb-6">Your Order</h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between border p-4 rounded-md shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image?.[0] || "https://placehold.co/100x100"}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price} x {item.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-xl font-semibold">Total: ${totalPrice}</p>
        <button
          onClick={clearCart}
          className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Order;

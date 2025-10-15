import React from "react";
import { useShop } from "../context/ShopContext";

const Hero = () => {
  const { products, loading, error } = useShop();

  // Take the newest product as a "bestseller" example
  const bestseller = products[0];

  if (loading) return <p className="text-center mt-6">Loading products...</p>;
  if (error) return <p className="text-center mt-6 text-red-500">{error}</p>;
  if (!bestseller) return <p className="text-center mt-6">No products available</p>;

  return (
    <div className="mt-6 border-2 border-gray-400 mx-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center p-6 bg-white">
        {/* Left Side */}
        <div className="flex flex-col justify-center space-y-3 md:space-y-4">
          <h1 className="text-5xl font-bold text-amber-500">OUR BESTSELLERS</h1>
          <p className="text-2xl text-gray-700">{bestseller.name}</p>
          <p className="text-lg text-gray-600">Grab it before it’s gone!</p>
          <p className="text-lg text-gray-600">Exclusive deals every week</p>
          <p className="text-lg text-gray-600">Free shipping on orders over $50</p>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={bestseller.image} // Make sure backend provides full image URL
            alt={bestseller.name}
            className="rounded-2xl w-80 md:w-96 max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

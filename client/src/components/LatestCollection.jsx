import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useShop } from "../context/ShopContext";

const LatestCollection = () => {
  const { products, loading, error } = useShop();
  const { addToCart } = useCart();

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading latest products...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  const latestProducts = products.slice(0, 8); // first 8 products

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-amber-500 mb-6 border-b-2 border-gray-300 inline-block">
        Latest Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {latestProducts.map((item) => (
          <div
            key={item._id}
            className="border-2 border-gray-200 rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300"
          >
            <Link to={`/product/${item._id}`}>
              <img
                src={item.image?.[0] || 'https://placehold.co/400x300'}
                alt={item.name}
                className="h-48 w-full object-contain mb-4 rounded-md"
              />
              <h3 className="text-lg font-semibold truncate">{item.name}</h3>
            </Link>
            <p className="text-gray-600 mt-2">${item.price}</p>
            <p className="text-sm text-gray-500">{item.category}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-3 bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;

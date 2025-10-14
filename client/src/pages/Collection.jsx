import React from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

const Collection = () => {
  const { products } = useShop();
  const imageBaseUrl = "http://localhost:5000/images/products/";

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col"
          >
            <Link to={`/product/${product._id}`}>
              <img
                src={
                  product.image
                    ? `${imageBaseUrl}${product.image}`
                    : "https://placehold.co/300x300"
                }
                alt={product.name}
                className="rounded-xl object-cover w-full h-64"
              />
            </Link>
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{product.category}</p>
            <p className="text-amber-600 font-bold text-xl">${product.price}</p>
            <Link
              to={`/product/${product._id}`}
              className="mt-4 text-center bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;

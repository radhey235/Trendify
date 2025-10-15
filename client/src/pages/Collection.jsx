import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

const Collection = () => {
  const { products } = useShop();
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Men", "Women", "Kids"];

  // Filter products based on selected category
  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Collection</h2>

      {/* Category Filter */}
      <div className="flex gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg border ${
              filter === cat
                ? "bg-amber-500 text-white border-amber-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-amber-100"
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="border rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col"
          >
            <Link to={`/product/${product._id}`}>
              <img
                src={product.image && product.image.length > 0 ? product.image[0] : "https://via.placeholder.com/300"} // fallback image
                alt={product.name}
                className="h-48 w-full object-contain mb-4 rounded-md"
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

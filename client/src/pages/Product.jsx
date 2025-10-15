import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { useCart } from "../context/CartContext";

const Product = () => {
  const { id } = useParams();
  const { products } = useShop();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const imageBaseUrl = "http://localhost:5000/images/products/";

  useEffect(() => {
    const found = products.find((p) => p._id === id);
    if (found) {
      setProduct(found);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [id, products]);

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading product...</p>;
  if (!product) return <p className="text-center mt-10 text-red-500">Product not found!</p>;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center">
          <img
              src={product.image && product.image.length > 0 ? product.image[0] : "https://via.placeholder.com/300"} // fallback image
              alt={product.name}
              className="h-48 w-full object-contain mb-4 rounded-md"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-3">{product.name}</h2>
          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
          <p className="text-gray-700 mb-5 leading-relaxed">{product.description}</p>

          <p className="text-3xl font-semibold text-amber-600 mb-6">${product.price}</p>

          <button
            onClick={() => addToCart(product)}
            className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

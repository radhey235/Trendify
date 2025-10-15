// src/context/ShopContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from backend and sort by newest first
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:5000/api/v1/products/all");
        // Sort products by date descending (newest first)
        const sortedProducts = res.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setProducts(sortedProducts);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ShopContext.Provider value={{ products, loading, error }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);

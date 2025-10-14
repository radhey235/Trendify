import Product from "../models/product.model.js";

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add single product with Cloudinary images
export const addProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const images = req.files?.map(file => file.path) || [];

    const product = new Product({
      name,
      description,
      price,
      category,
      image: images,
    });

    await product.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Bulk add products (with image URLs only)
export const addProductsBulk = async (req, res) => {
  try {
    const products = req.body; // array of product objects

    if (!Array.isArray(products)) {
      return res.status(400).json({ message: "Send an array of products" });
    }

    const savedProducts = await Product.insertMany(products);
    res.status(201).json({ message: "Products added successfully", products: savedProducts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

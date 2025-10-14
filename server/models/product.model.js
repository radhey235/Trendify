import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  subCategory: String,
  sizes: [String],
  image: [String],  // URLs instead of imports
  date: { type: Date, default: Date.now },
  bestseller: Boolean,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
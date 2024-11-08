import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  size: {
    type: String,
    required: true
  },
  availability: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  thumbnails: {
    type: [String],
    default: []
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  featured: {
    type: Boolean,
    required: true
  },
  mostPopular: {
    type: Boolean,
    required: true
  },
},
  {
    timestamps: true
  }
);

const Product = mongoose.model("product", productSchema);
export default Product;
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true
  }
},
  {
    timestamps: true
  }
);

const Blog = mongoose.model("blog", blogSchema);
export default Blog;
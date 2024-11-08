import Blog from "../models/blog-model.js";
import fs from "fs";


export const getBlog = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to get blogs" });
  }
}
export const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to get blog" });
  }
}

export const getBlogBySlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const blog = await Blog.findOne({ slug })
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to get blog" });
  }
};




export const addBlog = async (req, res) => {
  const { name, description, slug } = req.body;
  const image = req.file ? req.file.path : null;
  try {
    const newBlog = await Blog.create({ name, description, image, slug });
    res.status(201).json(newBlog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to add blog" });
  }
}
export const updateBlog = async (req, res) => {
  const { name, description, image, slug } = req.body;
  const { id } = req.params;
  try {
    const updatedBlog = await Blog.findById(id);
    await Blog.findByIdAndUpdate(id, { name, description, image, slug });
    if (!updatedBlog) {
      return res.status(404).json({ message: "Slider not found" });
    }
    if (image) {
      await Blog.findByIdAndUpdate(id, { image });
      if (fs.existsSync(`./${updatedBlog.image}`)) {
        fs.unlinkSync(`./${updatedBlog.image}`);
      }
    }
    res.status(200).json({ message: "Blog updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to update blog" });
  }
}
export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    fs.unlinkSync(`./${deletedBlog.image}`);
    res.status(200).json({ deletedBlog, message: "Blog Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to delete Blog" });
  }
}

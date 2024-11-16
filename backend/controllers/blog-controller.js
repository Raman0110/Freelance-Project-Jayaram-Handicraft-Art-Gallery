import Blog from "../models/blog-model.js";
import fs from "fs";

export const getBlog = async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.status(200).json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to get blogs" });
  }
};

export const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to get blog" });
  }
};

export const getBlogBySlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const blog = await Blog.findOne({ where: { slug } });
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
};
export const updateBlog = async (req, res) => {
  const { name, description, image, slug } = req.body;
  const { id } = req.params;

  try {
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (image && blog.image && fs.existsSync(`./${blog.image}`)) {
      fs.unlinkSync(`./${blog.image}`);
    }

    await blog.update({ name, description, image, slug });

    res.status(200).json({ message: "Blog updated successfully", blog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to update blog" });
  }
};

export const deleteBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (blog.image && fs.existsSync(`./${blog.image}`)) {
      fs.unlinkSync(`./${blog.image}`);
    }

    await blog.destroy();

    res.status(200).json({ message: "Blog deleted successfully", blog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to delete blog" });
  }
};

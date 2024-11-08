import Category from "../models/category-model.js";
import fs from "fs";
import Product from "../models/product-model.js";

export const addCategory = async (req, res) => {
  const { name, active, slug } = req.body;
  const image = req.file ? req.file.path : null;
  try {
    await Category.create({ name, image, active, slug });
    res.status(201).json({ message: "Category added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to add category" })
  }
}
export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, active } = req.body;
  const image = req.file ? req.file.path : null;
  try {
    const category = await Category.findById(id);
    await Category.findByIdAndUpdate(id, { name, active });
    if (image) {
      await Category.findByIdAndUpdate(id, { image });
      if (fs.existsSync(`./${category.image}`)) {
        fs.unlinkSync(`./${category.image}`);
      }
    }
    res.status(200).json({ message: "Category Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to update category" })
  }
}
export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    fs.unlinkSync(`./${deletedCategory.image}`);
    res.status(200).json({ deletedCategory, message: "Category deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to delete category" })
  }
}
export const getCategory = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to get categories" })
  }
}
export const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to find category" })
  }
}

export const getCategoryWithProduct = async (req, res) => {
  try {
    const categories = await Category.find();
    const categoryWithProducts = await Promise.all(
      categories.map(async (category) => {
        const products = await Product.find({ category: category._id });
        return { ...category.toObject(), products };
      })
    );
    res.status(200).json(categoryWithProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to find categories" });
  }
};


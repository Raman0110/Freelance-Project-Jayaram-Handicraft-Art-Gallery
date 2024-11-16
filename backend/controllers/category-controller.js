import Category from "../models/category-model.js";
import fs from "fs";
import Product from "../models/product-model.js";

export const addCategory = async (req, res) => {
  const { name, active, slug } = req.body;
  const image = req.file ? req.file.path : null;
  try {
    const newCategory = await Category.create({ name, image, active, slug });
    res.status(201).json({ message: "Category added successfully", category: newCategory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to add category" });
  }
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, active, slug } = req.body;
  const image = req.file ? req.file.path : null;
  try {
    const category = await Category.findByPk(id);
    if (!category) return res.status(404).json({ message: "Category not found" });

    await category.update({ name, active, slug });

    if (image) {
      if (fs.existsSync(`./${category.image}`)) {
        fs.unlinkSync(`./${category.image}`);
      }
      await category.update({ image });
    }

    res.status(200).json({ message: "Category Updated Successfully", category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to update category" });
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id);
    if (!category) return res.status(404).json({ message: "Category not found" });

    if (fs.existsSync(`./${category.image}`)) {
      fs.unlinkSync(`./${category.image}`);
    }

    await category.destroy();
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to delete category" });
  }
};

export const getCategory = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to get categories" });
  }
};

export const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.status(200).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to find category" });
  }
};

export const getCategoryWithProduct = async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: {
        model: Product,
        as: 'products'
      }
    });
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to get categories with products" });
  }
};

export const getCategoryProductWithSlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const category = await Category.findOne({
      where: { slug },
      include: {
        model: Product,
        as: 'products'
      }
    });

    if (!category) return res.status(404).json({ message: "Category not found" });

    res.status(200).json({ category, products: category.Products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to get category or products" });
  }
};
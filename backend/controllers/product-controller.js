import Product from "../models/product-model.js";
import Category from "../models/category-model.js";
import fs from "fs";
import nodeMailer from "nodemailer";
import { __dirname, __filename } from "../app.js";
import { Op } from 'sequelize';


export const getProduct = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{
        model: Category,
        as: 'category',
      }],
    });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to get products" });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id, {
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name']
        }
      ]
    });
    if (!product) return res.status(404).json({ message: "Product not found" });
    const thumbnails = product.thumbnails ? product.thumbnails.split(',') : [];
    res.status(200).json({
      ...product.toJSON(),
      thumbnails: thumbnails
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to get product" });
  }
};

export const getProductBySlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const product = await Product.findOne({
      where: { slug },
      include: {
        model: Category,
        attributes: ['name', 'id', 'slug'],
        as: 'category'
      }
    });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to get product" });
  }
};

export const addProduct = async (req, res) => {
  const { name, size, availability, description, categoryId, slug, featured, mostPopular } = req.body;

  const image = req.files?.image ? req.files.image[0].path : null;

  const thumbnails = req.files?.thumbnails ? req.files.thumbnails.map(file => file.path) : [];

  const thumbnailsString = thumbnails.length > 0 ? thumbnails.join(',') : '';
  if (!image) {
    return res.status(400).json({ message: "Product image is required" });
  }
  try {
    const newProduct = await Product.create({
      name,
      size,
      availability,
      description,
      image: image,
      categoryId,
      slug,
      featured,
      mostPopular,
      thumbnails: thumbnailsString
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to add product" });
  }
};

export const updateProduct = async (req, res) => {
  const { name, size, availability, description, slug, categoryId, featured, mostPopular } = req.body;
  const image = req.files?.image ? req.files.image[0].path : null;
  const thumbnails = req.files?.thumbnails ? req.files.thumbnails.map(file => file.path) : [];
  const thumbnailsString = thumbnails.length > 0 ? thumbnails.join(',') : '';
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.update({
      name,
      size,
      availability,
      description,
      slug,
      categoryId,
      featured,
      mostPopular,
      image: image || product.image,
      thumbnails: thumbnailsString
    });

    if (image) {
      if (fs.existsSync(`./${product.image}`)) {
        fs.unlinkSync(`./${product.image}`);
      }
      await product.update({ image });
    }

    if (thumbnails.length > 0) {
      product.thumbnails.forEach(thumbnail => {
        if (fs.existsSync(`./${thumbnail}`)) {
          fs.unlinkSync(`./${thumbnail}`);
        }
      });
      await product.update({ thumbnails });
    }

    res.status(200).json({ message: "Product updated successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to update product" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (fs.existsSync(`./${product.image}`)) {
      fs.unlinkSync(`./${product.image}`);
    }

    product.thumbnails.split(',').forEach(thumbnail => {
      if (fs.existsSync(`./${thumbnail}`)) {
        fs.unlinkSync(`./${thumbnail}`);
      }
    });

    await product.destroy();
    res.status(200).json({ message: "Product Deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to delete product" });
  }
};

export const shopProducts = async (req, res) => {
  const filter = {};
  try {
    const { category, size, availability, search } = req.query;

    if (category) {
      filter.categoryId = { [Op.in]: category.split(',') };
    }

    if (size) {
      filter.size = size;
    }

    if (availability) {
      filter.availability = availability === 'inStock' ? 'In stock' : 'Out of stock';
    }

    if (search) {
      filter.name = { [Op.like]: `%${search}%` };
    }

    const products = await Product.findAll({
      where: filter,
      include: {
        model: Category,
        as: 'category'
      }
    });

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to get products" });
  }
};

export const getProductMessage = async (req, res) => {
  const { productName, name, phone, email } = req.body;

  const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'srijalpudasaini89@gmail.com',
      pass: 'gnzr jvjo xdlq hvsu',
    },
  });

  const mailOptions = {
    from: 'srijalpudasaini89@gmail.com',
    to: 'ramantamang556@gmail.com',
    subject: `Message from ${name} about product ${productName}`,
    html: `Contact: ${phone} <br/> Email: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(400).json({ message: error.message });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: "Message sent successfully" });
    }
  });
};
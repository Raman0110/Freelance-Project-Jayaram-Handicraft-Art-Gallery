import Product from "../models/product-model.js";
import fs from "fs";
import nodeMailer from "nodemailer";

export const getProduct = async (req, res) => {
  try {
    const products = await Product.find({}).populate("category");
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to get products" });
  }
}
export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id).populate("category");
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to get product" });
  }
}

export const getProductBySlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const product = await Product.findOne({ slug }).populate("category");
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to get product" });
  }
}

export const addProduct = async (req, res) => {
  const { name, size, availability, description, category, slug, featured, mostPopular } = req.body;
  const image = req.files?.image ? req.files.image[0].path : null;
  const thumbnails = req.files?.thumbnails
    ? req.files.thumbnails.map(file => file.path)
    : [];
  try {
    const newProduct = await Product.create({ name, size, availability, description, image, category, slug, featured, mostPopular, thumbnails });
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to add product" });
  }
}
export const updateProduct = async (req, res) => {
  const { name, size, availability, description, slug, category, featured, mostPopular } = req.body;
  const image = req.files?.image ? req.files.image[0].path : null;
  const thumbnails = req.files?.thumbnails
    ? req.files.thumbnails.map(file => file.path)
    : [];
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    await Product.findByIdAndUpdate(id, { name, size, availability, description, slug, category, featured, mostPopular });
    if (image) {
      await Product.findByIdAndUpdate(id, { image });
      if (fs.existsSync(`./${product.image}`)) {
        fs.unlinkSync(`./${product.image}`);
      }
    }
    if (thumbnails) {
      await Product.findByIdAndUpdate(id, { thumbnails });
      product.thumbnails.map((thumbnail) => {
        if (fs.existsSync(`./${thumbnail}`)) {
          fs.unlinkSync(`./${thumbnail}`)
        }
      });
    }
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to update product" });
  }
}
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    const deleteProduct = await Product.findByIdAndDelete(id);
    res.status(200).json({ deleteProduct, message: "Product Deleted" });
    if (fs.existsSync(`./${product.image}`)) {
      fs.unlinkSync(`./${product.image}`);
    }
    product.thumbnails.map((thumbnail) => {
      if (fs.existsSync(`./${thumbnail}`)) {
        fs.unlinkSync(`./${thumbnail}`)
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to delete product" });
  }
}



export const shopProducts = async (req, res) => {
  const filter = {};
  try {
    const { category, size, availability } = req.query;
    if (category) {
      filter.category = { $in: category.split(',') };
    }
    if (size) {
      filter.size = size;
    }
    if (availability) {
      if (availability === 'inStock') {
        filter.availability = 'In stock';
      } else if (availability === 'outOfStock') {
        filter.availability = 'Out of stock';
      }
    }
    const products = await Product.find(filter);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to get products" });
  }
};

export const getProductMessage = async (req, res) => {
  const { productName, name, phone, email } = req.body;
  var transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'srijalpudasaini89@gmail.com',
      pass: 'sadv eqpd zetf sbzb'
    }
  });

  var mailOptions = {
    from: 'srijalpudasaini89@gmail.com',
    to: 'ramantamang556@gmail.com',
    subject: `Message from ${name} about product ${productName}`,
    html: `Contact: ${phone} <br/> Email: ${email}`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(400).json(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}



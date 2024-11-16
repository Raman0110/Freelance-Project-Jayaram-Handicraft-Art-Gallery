import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import Category from "./category-model.js";

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false
  },
  availability: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  thumbnails: {
    type: DataTypes.TEXT,
    defaultValue: ''
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  featured: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  mostPopular: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'id'
    }
  }
}, {
  timestamps: true,
  tableName: 'products'
});
export default Product;

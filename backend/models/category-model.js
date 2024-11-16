// category-model.js
import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import Product from "./product-model.js";

const Category = sequelize.define("Category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  timestamps: true,
  tableName: 'categories'
});

export default Category;

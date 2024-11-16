import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Blog = sequelize.define("Blog", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt
  tableName: 'blogs' // Optional: If you want to specify the table name explicitly
});

export default Blog;

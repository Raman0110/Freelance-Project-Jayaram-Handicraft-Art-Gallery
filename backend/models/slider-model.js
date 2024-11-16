import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Slider = sequelize.define("Slider", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: 'sliders'
});

export default Slider;

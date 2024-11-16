import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Message = sequelize.define("Message", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: 'messages'
});

export default Message;

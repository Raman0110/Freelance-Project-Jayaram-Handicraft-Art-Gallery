import mongoose from "mongoose";

const messageModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    message: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Message = mongoose.model('message', messageModel);
export default Message;
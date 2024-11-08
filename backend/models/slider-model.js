import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    slug: {
      type: String,
      required: true,
      unique: true
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true
  }
);

const Slider = mongoose.model("slider", sliderSchema);
export default Slider;
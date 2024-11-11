import Slider from "../models/slider-model.js";
import fs from "fs";

export const addSlider = async (req, res) => {
  const { name } = req.body;
  const image = req.file ? req.file.path : null;
  try {
    await Slider.create({ name, image });
    res.status(201).json({ message: "Slider added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to add slider image" });
  }
}

export const viewSliders = async (req, res) => {
  try {
    const sliderImages = await Slider.find({});
    res.status(200).json(sliderImages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to get slider images" });
  }
}

export const viewSliderById = async (req, res) => {
  const { id } = req.params;
  try {
    const sliderImage = await Slider.findById(id);
    if (!sliderImage) {
      return res.status(404).json({ message: "Slider not found" });
    }
    res.status(200).json(sliderImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to get slider image" });
  }
}

export const updateSlider = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const image = req.file ? req.file.path : null;

  try {
    const updateData = { name };
    const updatedSlider = await Slider.findById(id);
    await Slider.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedSlider) {
      return res.status(404).json({ message: "Slider not found" });
    }
    if (image) {
      await Slider.findByIdAndUpdate(id, { image });
      if (fs.existsSync(`./${updatedSlider.image}`)) {
        fs.unlinkSync(`./${updatedSlider.image}`);
      }
    }
    res.status(200).json({ message: "Slider image updated successfully", updatedSlider });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to update slider image" });
  }
}

export const deleteSlider = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSlider = await Slider.findByIdAndDelete(id);
    if (!deletedSlider) {
      return res.status(404).json({ message: "Slider not found" });
    }
    fs.unlinkSync(`./${deletedSlider.image}`);
    res.status(200).json({ message: "Slider image deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to delete slider image" });
  }
}

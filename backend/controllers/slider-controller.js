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
};

export const viewSliders = async (req, res) => {
  try {
    const sliders = await Slider.findAll();
    res.status(200).json(sliders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to get slider images" });
  }
};

export const viewSliderById = async (req, res) => {
  const { id } = req.params;
  try {
    const slider = await Slider.findByPk(id);
    if (!slider) {
      return res.status(404).json({ message: "Slider not found" });
    }
    res.status(200).json(slider);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to get slider image" });
  }
};

export const updateSlider = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const image = req.file ? req.file.path : null;

  try {
    const slider = await Slider.findByPk(id);
    if (!slider) {
      return res.status(404).json({ message: "Slider not found" });
    }

    await slider.update({ name });

    if (image) {
      if (fs.existsSync(`./${slider.image}`)) {
        fs.unlinkSync(`./${slider.image}`);
      }
      await slider.update({ image });
    }

    res.status(200).json({ message: "Slider image updated successfully", slider });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to update slider image" });
  }
};

export const deleteSlider = async (req, res) => {
  const { id } = req.params;

  try {
    const slider = await Slider.findByPk(id);
    if (!slider) {
      return res.status(404).json({ message: "Slider not found" });
    }

    if (slider.image && fs.existsSync(`./${slider.image}`)) {
      fs.unlinkSync(`./${slider.image}`);
    }

    await slider.destroy();

    res.status(200).json({ message: "Slider image deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to delete slider image" });
  }
};

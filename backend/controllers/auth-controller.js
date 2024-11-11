import bcrypt from "bcrypt";
import User from "../models/user-model.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(401).json({ message: "User already Exists" });
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPassword });
    res.status(201).json({ message: "User registered Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to create user" });
  }
}


export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Unable to find user" });
    if (!await bcrypt.compare(password, user.password)) return res.status(401).json({ message: "Invalid Credentials" });
    const token = jwt.sign({ id: user._id }, process.env.SECRET)
    res.cookie('token', token, {
      httpOnly: true,
    }).status(200).json({ message: "Login Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to login" });
  }
}


export const logout = (req, res) => {
  res.clearCookie('token').status(200).json({ message: "Logout Successfull" });
}

export const authenticateUser = (req, res) => {
  res.status(200).json({ isAdmin: true });
}

export const getUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
}
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const admin = await User.findById(id);
  const { username, email, password, newPassword } = req.body;
  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }
  const isPasswordValid = await bcrypt.compare(password, admin.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Password didn't match" });
  }
  let hashedPassword = await bcrypt.hash(password, 10);
  if (newPassword) {
    hashedPassword = await bcrypt.hash(newPassword, 10);
  }
  try {
    await User.findByIdAndUpdate(id, {
      username,
      email,
      password: hashedPassword,
    });

    res.status(200).json({ message: "Details updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while updating the user" });
  }
};

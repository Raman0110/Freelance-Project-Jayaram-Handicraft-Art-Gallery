import bcrypt from "bcrypt";
import User from "../models/user-model.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExist = await User.findOne({ where: { email } });
    if (userExist) return res.status(401).json({ message: "User already Exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hashedPassword });

    res.status(201).json({ message: "User registered Successfully", user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to create user" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ message: "Unable to find user" });

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return res.status(401).json({ message: "Invalid Credentials" });

    const token = jwt.sign({ id: user.id }, 'raman1234');

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    }).status(200).json({ message: "Login Successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to login" });
  }
};

export const logout = (req, res) => {
  res.clearCookie('token').status(200).json({ message: "Logout Successful" });
};

export const authenticateUser = (req, res) => {
  res.status(200).json({ isAdmin: true });
};

export const getUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Unable to retrieve users" });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password, newPassword } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: "Password didn't match" });

    let hashedPassword = await bcrypt.hash(newPassword || password, 10); // Hash the new password if provided, else keep old password

    await user.update({
      username,
      email,
      password: hashedPassword,
    });

    res.status(200).json({ message: "User details updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to update user" });
  }
};
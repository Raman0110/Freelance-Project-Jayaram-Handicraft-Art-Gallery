import bcrypt from "bcrypt";
import User from "../modules/user-model.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(401).json({ message: "User alread Exists" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hashedPassword });
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
    console.log(error);
    res.status(500).json({ message: "Unable to login" });
  }
}


export const logout = (req, res) => {
  res.clearCookie('token').status(200).json({ message: "Logout Successfull" });
}
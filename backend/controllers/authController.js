import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import jwt from "jsonwebtoken";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "Strict",
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
};

export const register = async (req, res) => {
  const {userName, email, password} = req.body;

  const userExists = await User.findOne({email});

  if (userExists) return res.status(400).json({message: "User already exists"});

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({userName, email, password: hashed});

  const token = generateToken(user._id);
  res
    .cookie("token", token, cookieOptions)
    .status(200)
    .json({message: "User registered successfully"});
};

export const login = async (req, res) => {
  const {email, password} = req.body;
  const user = await User.findOne({email});

  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({message: "Invalid email or password"});

  const token = generateToken(user._id);
  res
    .cookie("token", token, cookieOptions)
    .json({message: "Logged in successfully"});
};

export const logout = (req, res) => {
  res.clearCookie("token", {httpOnly: true, sameSite: "Strict"});
  res.json({message: "Logged out successfully"});
};

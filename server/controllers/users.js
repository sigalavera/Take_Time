const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/user.js");

const signin = async (req, res) => {
  console.log(req.body.data.result);
  try {
    res.status(200).json({ result,  token });
  } catch (error) {
    res.status(500).json({ message: "Something went worng" });
  }
};


const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json({ users }).status(200);
  } catch (e) {
    res.json({ message: "err" }).status(500);
  }
};
module.exports = {
  signin,
  getAllUsers,
};

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../models/user.js");

const signin = async (req, res) => {
  try {
    const { googleId, imageUrl, email, name, givenName, familyName } = req.body.data.result;
    console.log(req.body.data.result);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(404).json({ message: "User doesn't exist." });
    }
    try {
      const addUser = await User.insertMany({ googleId, imageUrl, email, name, givenName, familyName });
      res.json({ message: "success", addUser }).status(201)
    } catch (e) {
      res.json({ message: e }).status(400)
    }

  } catch (error) {
    res.status(500).json({ message: "Something went worng" });
  }
};


const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) {
      res.json({ message: "no users" }).status(200)
    }
    res.json({ users }).status(200);
  } catch (e) {
    res.json({ message: "err" }).status(500);
  }
};
module.exports = {
  signin,
  getAllUsers,
};

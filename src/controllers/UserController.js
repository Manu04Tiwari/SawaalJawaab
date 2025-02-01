const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

// Register User
exports.registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Kindly provide us with your Email and Password here." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Hey!! Welcome back your Email is already with us" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Yoohoo!! You have registered" });
  } catch (error) {
    res.status(500).json({ message: "Some issues on our side might have occured....rest assured we'll fix it ASAP" });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Ohoo!! Not the correct Email." });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ message: "Welcome back!! Login Successful", token });
  } catch (error) {
    res.status(500).json({ message: "Some issues on our side might have occured....rest assured we'll fix it ASAP" });
  }
};

// Get User Details
exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "Hey!! You're here for the first time?. Register with us." });
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: "Some issues on our side might have occured....rest assured we'll fix it ASAP" });
  }
};

// Update User
exports.updateUser = async (req, res) => {
  try {
    const updates = req.body;
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(req.user.id, updates, { new: true }).select("-password");
    res.json({ message: "Hey!! You have successfully updated the credentials.", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Some issues on our side might have occured....rest assured we'll fix it ASAP" });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);
    res.json({ message: "Onoo!! You're leaving us so soon." });
  } catch (error) {
    res.status(500).json({ message: "Some issues on our side might have occured....rest assured we'll fix it ASAP" });
  }
};
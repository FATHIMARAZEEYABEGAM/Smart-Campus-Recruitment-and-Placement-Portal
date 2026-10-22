const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();


// ==========================================
// REGISTER USER
// ==========================================

router.post("/register", async (req, res) => {
  try {

    const { fullName, email, password, role } = req.body;

    // Check all fields
    if (!fullName || !email || !password || !role) {
      return res.status(400).json({
        message: "Please fill all fields"
      });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered"
      });
    }

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      role
    });

    // Response
    res.status(201).json({
      message: "Registration successful",
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {

    console.error("Registration error:", error);

    res.status(500).json({
      message: "Server error during registration"
    });

  }
});


// ==========================================
// LOGIN USER
// ==========================================

router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    // Check fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Please enter email and password"
      });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    // Compare password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    // Create JWT token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d"
      }
    );

    // Send response
    res.json({
      message: "Login successful",

      token,

      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {

    console.error("Login error:", error);

    res.status(500).json({
      message: "Server error during login"
    });

  }
});


module.exports = router;
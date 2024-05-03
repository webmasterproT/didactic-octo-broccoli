const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { authConfig } = require('../config/auth');

const userController = {
  // Register a new user
  register: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
      }

      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(409).json({ message: 'Email already in use.' });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Server error during registration.' });
    }
  },

  // Authenticate a user and return a JWT
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials.' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials.' });
      }

      const token = jwt.sign({ id: user._id }, authConfig.secret, { expiresIn: '1h' });
      res.status(200).json({ message: 'User authenticated successfully.', token });
    } catch (error) {
      res.status(500).json({ message: 'Server error during authentication.' });
    }
  },

  // Get user profile information
  getProfile: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }

      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ message: 'Server error retrieving user profile.' });
    }
  },

  // Update user profile information
  updateProfile: async (req, res) => {
    try {
      const { name, location, interests } = req.body;
      const user = await User.findByIdAndUpdate(req.user.id, { name, location, interests }, { new: true });

      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }

      res.status(200).json({ message: 'Profile updated successfully.', user });
    } catch (error) {
      res.status(500).json({ message: 'Server error updating profile.' });
    }
  }
};

module.exports = userController;
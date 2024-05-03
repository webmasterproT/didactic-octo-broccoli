const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// Route to handle subscription form submission
router.post('/subscribe', subscriptionController.handleSubscription);

// Route to handle sign-up form submission (if user also wants to sign up)
router.post('/signup', subscriptionController.handleSignup);

module.exports = router;
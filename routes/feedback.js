const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// Route to handle feedback submission
router.post('/submit', feedbackController.submitFeedback);

// Route to handle topic suggestion
router.post('/suggest-topic', feedbackController.suggestTopic);

// Route to handle notification of article viewing
router.post('/notify-view', feedbackController.notifyArticleView);

module.exports = router;
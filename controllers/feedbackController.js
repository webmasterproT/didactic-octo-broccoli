const Feedback = require('../models/feedback');

const feedbackController = {
  submitFeedback: async (req, res) => {
    try {
      const { email, phone, name, birthday, location, company, interests, demographics, additionalInfo, viewedContentId } = req.body;
      const feedback = new Feedback({
        email,
        phone,
        name,
        birthday,
        location,
        company,
        interests,
        demographics,
        additionalInfo,
        viewedContentId
      });
      await feedback.save();
      res.status(201).json({ message: 'Feedback submitted successfully', feedback });
    } catch (error) {
      res.status(500).json({ message: 'Error submitting feedback', error });
    }
  },

  suggestTopic: async (req, res) => {
    try {
      const { suggestion } = req.body;
      // Assuming there is a separate collection or a field to store suggestions
      // This is a placeholder for the actual implementation
      const topicSuggestion = { suggestion, date: new Date() };
      // Save the suggestion to the database
      // Placeholder for database operation
      res.status(201).json({ message: 'Topic suggestion received', topicSuggestion });
    } catch (error) {
      res.status(500).json({ message: 'Error receiving topic suggestion', error });
    }
  },

  notifyViewedContent: async (req, res) => {
    try {
      const { email, name, contentId } = req.body;
      // Placeholder for notifying the admin about the viewed content
      // This could be an email sent to the admin or a record in the database
      res.status(200).json({ message: 'Admin notified about viewed content' });
    } catch (error) {
      res.status(500).json({ message: 'Error notifying about viewed content', error });
    }
  }
};

module.exports = feedbackController;
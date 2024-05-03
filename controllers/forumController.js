const ForumTopic = require('../models/forum');

const forumController = {
  // Get all forum topics
  getAllTopics: async (req, res) => {
    try {
      const topics = await ForumTopic.find({});
      res.status(200).json(topics);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching forum topics', error });
    }
  },

  // Get a single forum topic by ID
  getTopicById: async (req, res) => {
    try {
      const topic = await ForumTopic.findById(req.params.id);
      if (!topic) {
        return res.status(404).json({ message: 'Topic not found' });
      }
      res.status(200).json(topic);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching forum topic', error });
    }
  },

  // Create a new forum topic
  createTopic: async (req, res) => {
    try {
      const newTopic = new ForumTopic(req.body);
      const savedTopic = await newTopic.save();
      res.status(201).json(savedTopic);
    } catch (error) {
      res.status(500).json({ message: 'Error creating new forum topic', error });
    }
  },

  // Update a forum topic
  updateTopic: async (req, res) => {
    try {
      const updatedTopic = await ForumTopic.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedTopic) {
        return res.status(404).json({ message: 'Topic not found' });
      }
      res.status(200).json(updatedTopic);
    } catch (error) {
      res.status(500).json({ message: 'Error updating forum topic', error });
    }
  },

  // Delete a forum topic
  deleteTopic: async (req, res) => {
    try {
      const deletedTopic = await ForumTopic.findByIdAndDelete(req.params.id);
      if (!deletedTopic) {
        return res.status(404).json({ message: 'Topic not found' });
      }
      res.status(200).json({ message: 'Topic deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting forum topic', error });
    }
  },

  // Add a comment to a forum topic
  addComment: async (req, res) => {
    try {
      const topic = await ForumTopic.findById(req.params.id);
      if (!topic) {
        return res.status(404).json({ message: 'Topic not found' });
      }
      topic.comments.push(req.body);
      const updatedTopic = await topic.save();
      res.status(200).json(updatedTopic);
    } catch (error) {
      res.status(500).json({ message: 'Error adding comment to forum topic', error });
    }
  }
};

module.exports = forumController;
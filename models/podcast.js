const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  datePublished: {
    type: Date,
    default: Date.now
  },
  audioUrl: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  }
});

const Podcast = mongoose.model('Podcast', podcastSchema);

module.exports = Podcast;
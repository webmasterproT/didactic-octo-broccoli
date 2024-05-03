const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  topic: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  publishedDate: {
    type: Date,
    default: Date.now
  },
  author: {
    type: String,
    required: true,
    trim: true
  },
  imageUrl: {
    type: String,
    required: false
  },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
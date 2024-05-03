const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const articleController = require('../controllers/articleController');
const podcastController = require('../controllers/podcastController');
const videoController = require('../controllers/videoController');
const forumController = require('../controllers/forumController');
const subscriptionController = require('../controllers/subscriptionController');
const feedbackController = require('../controllers/feedbackController');
const authMiddleware = require('../middleware/authMiddleware');

// Middleware to redirect users coming from a search engine to the home page
router.use((req, res, next) => {
  if (req.get('Referer') && req.get('Referer').includes('google')) {
    return res.redirect('/index');
  }
  next();
});

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/index', (req, res) => {
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/articles', articleController.listArticles);

router.get('/podcast', podcastController.listPodcasts);

router.get('/videos', videoController.listVideos);

router.get('/accessgranted', authMiddleware.ensureAuthenticated, (req, res) => {
  res.render('accessgranted/index');
});

router.get('/forum', forumController.listTopics);

router.get('/subscribe', (req, res) => {
  res.render('subscribe/index');
});

router.get('/privacy', (req, res) => {
  res.render('privacy');
});

router.get('/legal', (req, res) => {
  res.render('legal');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.get('/disclaimer', (req, res) => {
  res.render('disclaimer');
});

router.get('/sitemap', (req, res) => {
  res.render('sitemap');
});

router.get('/feedback', (req, res) => {
  res.render('feedback');
});

// Post routes for user interactions
router.post('/subscribe', subscriptionController.handleSubscription);
router.post('/feedback', feedbackController.handleFeedback);

module.exports = router;
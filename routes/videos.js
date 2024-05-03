const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

// Middleware to check if user is authenticated
router.use((req, res, next) => {
  if (!req.session.userId) {
    return res.redirect('/login');
  }
  next();
});

// Route to display video player page
router.get('/', videoController.index);

// Route to handle individual video viewing
router.get('/:videoId', videoController.show);

// Route to handle video watched event
router.post('/:videoId/watched', videoController.markAsWatched);

module.exports = router;
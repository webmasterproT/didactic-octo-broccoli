const express = require('express');
const router = express.Router();
const podcastController = require('../controllers/podcastController');

// Route to get all podcasts
router.get('/', podcastController.getAllPodcasts);

// Route to get a single podcast by id
router.get('/:id', podcastController.getPodcastById);

// Route to handle podcast play event
router.post('/:id/play', podcastController.handlePodcastPlay);

module.exports = router;
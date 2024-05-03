const express = require('express');
const router = express.Router();
const forumController = require('../controllers/forumController');
const authMiddleware = require('../middleware/authMiddleware');

// Middleware to check if user is authenticated and has access to the forum
router.use('/forum', authMiddleware.ensureAuthenticated, authMiddleware.grantAccess);

// GET request for the forum main page
router.get('/forum', forumController.getForumMainPage);

// GET request for individual forum topic pages
router.get('/forum/justice', forumController.getForumJustice);
router.get('/forum/legislation', forumController.getForumLegislation);
router.get('/forum/time', forumController.getForumTime);
router.get('/forum/thematrix', forumController.getForumTheMatrix);
router.get('/forum/competition', forumController.getForumCompetition);
router.get('/forum/cooperation', forumController.getForumCooperation);
router.get('/forum/humannature', forumController.getForumHumanNature);
router.get('/forum/psychology', forumController.getForumPsychology);
router.get('/forum/advocacy', forumController.getForumAdvocacy);
router.get('/forum/ethics', forumController.getForumEthics);
router.get('/forum/efficiency', forumController.getForumEfficiency);
router.get('/forum/AI', forumController.getForumAI);
router.get('/forum/solutions', forumController.getForumSolutions);
router.get('/forum/selfawareness', forumController.getForumSelfAwareness);
router.get('/forum/otherawareness', forumController.getForumOtherAwareness);

// POST request to add a new topic to the forum
router.post('/forum/add-topic', forumController.postAddForumTopic);

// POST request to comment on a forum topic
router.post('/forum/:topicId/comment', forumController.postCommentOnTopic);

// PUT request to like a comment or topic
router.put('/forum/:topicId/like', forumController.putLikeTopicOrComment);

module.exports = router;
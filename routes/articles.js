const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

// Middleware to check if the user is redirected from a search engine
router.use((req, res, next) => {
  if (req.get('Referer') && req.get('Referer').includes('search')) {
    return res.redirect('/index');
  }
  next();
});

// Route to display the main articles page with topics
router.get('/', articleController.getArticleTopics);

// Routes for each article topic
router.get('/legislation', articleController.getLegislationArticles);
router.get('/justice', articleController.getJusticeArticles);
router.get('/time', articleController.getTimeArticles);
router.get('/thematrix', articleController.getTheMatrixArticles);
router.get('/competition', articleController.getCompetitionArticles);
router.get('/cooperation', articleController.getCooperationArticles);
router.get('/humannature', articleController.getHumanNatureArticles);
router.get('/psychology', articleController.getPsychologyArticles);
router.get('/advocacy', articleController.getAdvocacyArticles);
router.get('/ethics', articleController.getEthicsArticles);
router.get('/efficiency', articleController.getEfficiencyArticles);
router.get('/AI', articleController.getAIArticles);
router.get('/solutions', articleController.getSolutionsArticles);
router.get('/selfawareness', articleController.getSelfAwarenessArticles);
router.get('/otherawareness', articleController.getOtherAwarenessArticles);

module.exports = router;
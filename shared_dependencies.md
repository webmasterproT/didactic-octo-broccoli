Shared Dependencies:

**Exported Variables:**
- `dbURI` (from `.env` for MongoDB connection string)
- `User` (from `models/user.js` for user schema)
- `Article` (from `models/article.js` for article schema)
- `Podcast` (from `models/podcast.js` for podcast schema)
- `Video` (from `models/video.js` for video schema)
- `ForumTopic` (from `models/forum.js` for forum topic schema)

**Data Schemas:**
- `userSchema` (from `models/user.js`)
- `articleSchema` (from `models/article.js`)
- `podcastSchema` (from `models/podcast.js`)
- `videoSchema` (from `models/video.js`)
- `forumTopicSchema` (from `models/forum.js`)

**ID Names of DOM Elements:**
- `#animationCanvas` (for the landing page animation)
- `#redPillButton` (for the "the red pill" button)
- `#rabbitHoleButton` (for the "Enter the Rabbit Hole" button)
- `#articleList` (for the list of articles)
- `#podcastPlayer` (for the podcast player)
- `#videoPlayer` (for the video player)
- `#forumContainer` (for the forum topics and discussions)
- `#subscribeForm` (for the subscription form)
- `#feedbackForm` (for the feedback form)
- `#footerNavigation` (for the footer links)

**Message Names:**
- `USER_LOGIN` (for user login event)
- `USER_LOGOUT` (for user logout event)
- `ARTICLE_VIEWED` (for article viewed event)
- `PODCAST_PLAYED` (for podcast played event)
- `VIDEO_WATCHED` (for video watched event)
- `FORUM_TOPIC_ADDED` (for new forum topic event)
- `SUBSCRIPTION_REQUEST` (for subscription request event)
- `FEEDBACK_SUBMITTED` (for feedback submitted event)

**Function Names:**
- `initAnimation()` (from `js/animation.js` for initializing animations)
- `handleRedPillClick()` (from `js/interactivity.js` for handling "the red pill" button click)
- `handleRabbitHoleHover()` (from `js/interactivity.js` for handling hover over "Enter the Rabbit Hole" button)
- `handleRabbitHoleClick()` (from `js/interactivity.js` for handling "Enter the Rabbit Hole" button click)
- `initPodcastPlayer()` (from `js/podcastPlayer.js` for initializing podcast player)
- `initVideoPlayer()` (from `js/videoPlayer.js` for initializing video player)
- `initForumInteractions()` (from `js/forum.js` for initializing forum interactions)
- `handleSubscription()` (from `js/subscription.js` for handling subscriptions)
- `handleFeedback()` (from `js/feedback.js` for handling feedback submissions)
- `redirectToHomePage()` (from `js/main.js` for redirecting to home page if accessed via search engine)
- `validateSubscriptionForm()` (from `utils/validation.js` for validating subscription form)
- `validateFeedbackForm()` (from `utils/validation.js` for validating feedback form)

**Middleware/Controllers:**
- `authMiddleware` (from `middleware/authMiddleware.js` for authentication checks)
- `errorMiddleware` (from `middleware/errorMiddleware.js` for error handling)
- `userController` (from `controllers/userController.js` for user-related actions)
- `articleController` (from `controllers/articleController.js` for article-related actions)
- `podcastController` (from `controllers/podcastController.js` for podcast-related actions)
- `videoController` (from `controllers/videoController.js` for video-related actions)
- `forumController` (from `controllers/forumController.js` for forum-related actions)
- `subscriptionController` (from `controllers/subscriptionController.js` for subscription-related actions)
- `feedbackController` (from `controllers/feedbackController.js` for feedback-related actions)

**Configurations:**
- `databaseConfig` (from `config/database.js` for database configuration)
- `authConfig` (from `config/auth.js` for authentication configuration)

**Routes:**
- `indexRoutes` (from `routes/index.js`)
- `articleRoutes` (from `routes/articles.js`)
- `podcastRoutes` (from `routes/podcast.js`)
- `videoRoutes` (from `routes/videos.js`)
- `forumRoutes` (from `routes/forum.js`)
- `subscriptionRoutes` (from `routes/subscription.js`)
- `feedbackRoutes` (from `routes/feedback.js`)
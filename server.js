const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
require('dotenv').config();

const indexRoutes = require('./routes/index');
const articlesRoutes = require('./routes/articles');
const podcastRoutes = require('./routes/podcast');
const videosRoutes = require('./routes/videos');
const forumRoutes = require('./routes/forum');
const subscriptionRoutes = require('./routes/subscription');
const feedbackRoutes = require('./routes/feedback');
const authMiddleware = require('./middleware/authMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();
const store = new MongoDBStore({
  uri: process.env.dbURI,
  collection: 'sessions'
});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'my secret',
  resave: false,
  saveUninitialized: false,
  store: store
}));

app.use(authMiddleware.checkAuth);

app.use('/', indexRoutes);
app.use('/articles', articlesRoutes);
app.use('/podcast', podcastRoutes);
app.use('/videos', videosRoutes);
app.use('/forum', forumRoutes);
app.use('/subscribe', subscriptionRoutes);
app.use('/feedback', feedbackRoutes);

app.use(errorMiddleware.get404);
app.use(errorMiddleware.get500);

mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT || 3000}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
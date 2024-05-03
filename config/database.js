const mongoose = require('mongoose');

const dbURI = process.env.MONGO_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log('Database connection established!');
  },
  err => {
    console.log('Error connecting Database instance due to: ', err);
  }
);

// To handle the connection events
mongoose.connection.on('connected', () => {
  console.log(`Mongoose default connection is open to ${dbURI}`);
});

mongoose.connection.on('error', err => {
  console.log(`Mongoose default connection has occured ${err} error`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection is disconnected due to application termination');
    process.exit(0);
  });
});

module.exports = mongoose;
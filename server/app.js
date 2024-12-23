const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 4000;
const MONGO_URI = 'mongodb://localhost:27017/smart-logistics';

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connect to MongoDB
mongoose.connect(MONGO_URI, {})
.then(() => {
  console.log('MongoDB Connected Successfully!');
})
.catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

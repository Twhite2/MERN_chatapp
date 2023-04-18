const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@mernchat.qon5p9s.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch((error) => {
    console.error('Error connecting to mongodb', error);
  });

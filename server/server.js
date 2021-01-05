const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

// Bodyparser Middleware
app.use(express.json());

// DB Confing
const db = config.get('mongoURI');

// Connect to mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Mongo db connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', require('./routes/api/items'))
app.use('/api/artists', require('./routes/api/artists'))
app.use('/api/publishers', require('./routes/api/publishers'))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


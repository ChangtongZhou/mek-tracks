const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;

// Import routes from the staff
const pilot = require('./routes/pilot.route');

// Set up mongoose connection
const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
const db_url = "mongodb://localhost:pass12345@ds245772.mlab.com:45772/mek_tracks_db";
mongoose.connect(db_url);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', () => {
    console.log('Mongodb connected successfully.');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/pilots', pilot);

app.listen(PORT, () => console.log(`Mek-tracks app listening on port ${PORT}`));
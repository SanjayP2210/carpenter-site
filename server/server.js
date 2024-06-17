const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/project');
// const fileURLToPath = require('url');
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
const app = express();
const path = require('path');
require('dotenv').config();
// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/carpenter', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use('/auth', authRoutes);
app.use('/api', projectRoutes);

// Routes
app.get('/bookings', async (req, res) => {
    const bookings = await Booking.find();
    res.json(bookings);
});

app.post('/bookings', async (req, res) => {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.json(newBooking);
});

app.use(express.static(path.join(__dirname, '../client/dist')));

// Handle other routes and return React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../client/dist/index.html'));
});

console.log('process.env', process.env.PORT);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

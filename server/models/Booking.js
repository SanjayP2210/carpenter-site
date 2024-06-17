const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    service: String,
    date: Date,
    message: String
});

module.exports = mongoose.model('Booking', BookingSchema);

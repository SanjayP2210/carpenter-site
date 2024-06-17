const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);

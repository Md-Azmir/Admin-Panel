const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    minFees: { type: Number, required: true },
    maxFees: { type: Number, required: true },
    duration: { type: String, required: true },
    courseId: { type: String, required: true },
    courseImage: { type: File, required: true }
});

module.exports = mongoose.model('Course', courseSchema);

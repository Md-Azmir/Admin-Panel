const express = require('express');
const multer = require('multer');
const path = require('path');
const Course = require('../models/course');

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Add a new course
router.post('/add', upload.single('courseImage'), async (req, res) => {
    try {
        const { courseName, minFees, maxFees, duration, courseId } = req.body;
        const courseImage = req.file.path;
        
        const newCourse = new Course({
            courseName,
            minFees,
            maxFees,
            duration,
            courseId,
            courseImage
        });

        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a single course by ID
router.get('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ error: 'Course not found' });
        res.status(200).json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a course
router.put('/update/:id', upload.single('courseImage'), async (req, res) => {
    try {
        const { courseName, minFees, maxFees, duration, courseId } = req.body;
        const updateData = { courseName, minFees, maxFees, duration, courseId };

        if (req.file) {
            updateData.courseImage = req.file.path;
        }

        const updatedCourse = await Course.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!updatedCourse) return res.status(404).json({ error: 'Course not found' });

        res.status(200).json(updatedCourse);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a course
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedCourse = await Course.findByIdAndDelete(req.params.id);
        if (!deletedCourse) return res.status(404).json({ error: 'Course not found' });
        res.status(200).json(deletedCourse);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

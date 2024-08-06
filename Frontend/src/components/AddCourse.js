import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
    const [courseName, setCourseName] = useState('');
    const [minFees, setMinFees] = useState('');
    const [maxFees, setMaxFees] = useState('');
    const [duration, setDuration] = useState('');
    const [courseId, setCourseId] = useState('');
    const [courseImage, setCourseImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('courseName', courseName);
        formData.append('minFees', minFees);
        formData.append('maxFees', maxFees);
        formData.append('duration', duration);
        formData.append('courseId', courseId);
        formData.append('courseImage', courseImage);

        try {
            await axios.post('http://localhost:5000/api/courses/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Course added successfully');
        } catch (error) {
            console.error('There was an error adding the course!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Course Name:
                <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
            </label>
            <label>
                Minimum Fees:
                <input type="number" value={minFees} onChange={(e) => setMinFees(e.target.value)} required />
            </label>
            <label>
                Maximum Fees:
                <input type="number" value={maxFees} onChange={(e) => setMaxFees(e.target.value)} required />
            </label>
            <label>
                Duration:
                <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} required />
            </label>
            <label>
                Course ID:
                <input type="text" value={courseId} onChange={(e) => setCourseId(e.target.value)} required />
            </label>
            <label>
                Upload Course Photo:
                <input type="file" onChange={(e) => setCourseImage(e.target.files[0])} required />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddCourse;

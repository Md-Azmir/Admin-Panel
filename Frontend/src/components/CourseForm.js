import React, { useState } from 'react';
import axios from 'axios';

const CourseForm = ({ onCourseAdded }) => {
  const [course, setCourse] = useState({
    name: '',
    minFees: '',
    maxFees: '',
    duration: '',
    courseId: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleFileChange = (e) => {
    setCourse({ ...course, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', course.name);
    formData.append('minFees', course.minFees);
    formData.append('maxFees', course.maxFees);
    formData.append('duration', course.duration);
    formData.append('courseId', course.courseId);
    formData.append('image', course.image);

    try {
      const response = await axios.post('http://localhost:3000/courses/add', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      onCourseAdded(response.data);
      setCourse({ name: '', minFees: '', maxFees: '', duration: '', courseId: '', image: null });
    } catch (error) {
      console.error('There was an error adding the course!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Course Name:</label>
        <input type="text" name="name" value={course.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Minimum Fees:</label>
        <input type="number" name="minFees" value={course.minFees} onChange={handleChange} required />
      </div>
      <div>
        <label>Maximum Fees:</label>
        <input type="number" name="maxFees" value={course.maxFees} onChange={handleChange} required />
      </div>
      <div>
        <label>Duration:</label>
        <input type="text" name="duration" value={course.duration} onChange={handleChange} required />
      </div>
      <div>
        <label>Course Id:</label>
        <input type="text" name="courseId" value={course.courseId} onChange={handleChange} required />
      </div>
      <div>
        <label>Upload Course Photo:</label>
        <input type="file" name="image" onChange={handleFileChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CourseForm;

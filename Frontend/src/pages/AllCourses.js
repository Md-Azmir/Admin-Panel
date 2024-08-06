import React, { useState } from 'react';
import CourseForm from '../components/CourseForm';
import CourseList from '../components/CourseList';

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  const handleCourseAdded = (newCourse) => {
    setCourses([...courses, newCourse]);
  };

  return (
    <div className="all-courses">
      <h2>All Courses</h2>
      <CourseForm onCourseAdded={handleCourseAdded} />
      <CourseList />
    </div>
  );
};

export default AllCourses;

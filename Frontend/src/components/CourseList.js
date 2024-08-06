import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:3000/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('There was an error fetching the courses!', error);
    }
  };

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/courses/${id}`);
      fetchCourses();
    } catch (error) {
      console.error('There was an error deleting the course!', error);
    }
  };

  return (
    <div className="course-list">
      {courses.map((course) => (
        <div key={course._id} className="course-item">
          <img src={`http://localhost:3000/${course.image}`} alt={course.name} />
          <div>{course.name}</div>
          <div>{course.duration}</div>
          <div className="actions">
            <button onClick={() => deleteCourse(course._id)}>Delete</button>
            <button>Edit</button>
            <button>View</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;

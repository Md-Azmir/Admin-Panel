import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/courses');
                setCourses(response.data);
            } catch (error) {
                console.error('There was an error fetching the courses!', error);
            }
        };

        fetchCourses();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/courses/delete/${id}`);
            setCourses(courses.filter(course => course._id !== id));
        } catch (error) {
            console.error('There was an error deleting the course!', error);
        }
    };

    return (
        <div>
            <h1>All Courses</h1>
            <table>
                <thead>
                    <tr>
                        <th>Course Image</th>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course._id}>
                            <td><img src={`http://localhost:5000/${course.courseImage}`} alt={course.courseName} width="100" /></td>
                            <td>{course.courseName}</td>
                            <td>{course.duration}</td>
                            <td>
                                <button onClick={() => handleDelete(course._id)}>Delete</button>
                                {/* Add links for Edit and View if needed */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CourseList;
